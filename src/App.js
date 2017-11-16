import React, { Component } from 'react';
import logo from './duck.png';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Character from './character';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CharacterActions from './actions/characterActions';

window.axios = axios;
window.axios.defaults.baseURL = 'https://5a09f7457e1850001267a8d5.mockapi.io/api/';

class App extends Component {
    /*
    constructor(props) {
        super(props);

        console.log(props.store.getState());
        this.state = props.store.getState().characters;
    }
*/
    componentDidMount(){
        this.loadCharacters();
    };

    loadCharacters(){
        let that = this;
        axios.get('/characters')
            .then(function (response) {
                //that.setState({characters: response.data});
                console.log(that.props.actions);
                that.props.actions.loadCharacters(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    deleteCharacter(index){
        this.props.actions.deleteCharacter(index);
        //this.props.store.dispatch(CharacterActions.delete(index));
/*
        let characters = this.state.characters;
        characters.splice(index, 1);
        this.setState({characters: characters});*/
    }

    render() {
        let that = this;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="RPG" />
                </header>
                <Panel header={"Characters"} bsStyle={"primary"}>
                    <Grid>
                        {this.props.characters.map(function(character, i){
                            let deleteButton = <Button onClick={that.deleteCharacter.bind(that, i)} bsSize={"xs"} className={"pull-right"}>X</Button>
                            return(
                                <Row key={character.id}>
                                    <Character character={character} deleteButton={deleteButton}/>
                                </Row>);
                            })
                        }
                    </Grid>
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CharacterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from 'react';
import logo from './duck.png';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Character from './character';
import { observer } from 'mobx-react';


import axios from 'axios';
window.axios = axios;
window.axios.defaults.baseURL = 'https://5a09f7457e1850001267a8d5.mockapi.io/api/';

const App = observer(class App extends Component {
    /*constructor(props) {
        super(props);

        this.state = {
            characters: [],
        };
    }*/

    componentDidMount(){
        this.loadCharacters();
    };

    loadCharacters(){
        let that = this;
        axios.get('/characters')
            .then(function (response) {
                //that.setState({characters: response.data});
                that.props.store.setCharacters(response.data);
                console.log(that.props.store);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    deleteCharacter(index){
        this.props.store.deleteCharacter(index);
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
                        {this.props.store.characters.map(function(character, i){
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
});

export default App;
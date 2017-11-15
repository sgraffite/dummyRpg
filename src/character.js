import React, { Component } from 'react';
import avatar from './duck.png';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';

import StatRow from './statRow';

export default class Character extends Component {
    constructor(props) {
        super(props);
        this.state = props.character;
    }

    incrementProperty(property){
        var value = this.state[property];
        value++;
        this.setState({[property]: value});
    }

    decrementProperty(property){
        var value = this.state[property];
        value--;
        this.setState({[property]: value});
    }

    render(){
        let header = <div>{this.state.name} {this.props.deleteButton}</div>;

        return(
            <Panel header={header} bsStyle={"primary"} className={"pull-left"} style={{'minWidth': '350px'}}>
                <Row>
                    <Col lg={6}>
                        <Well>
                            <Row>
                                <img src={avatar} alt={"avatar"}/>
                            </Row>
                            <Row>
                                <div className="col-md-9 text-left">Level</div>
                                <div className="col-md-3 text-right">{this.state.level}</div>
                            </Row>
                            <Row>
                                <div className="col-md-9 text-left">{this.state.class}</div>
                            </Row>
                            <Row>
                                <div className="col-md-9 text-left">{this.state.race}</div>
                            </Row>
                        </Well>
                    </Col>
                    <Col lg={6}>
                        <Well>
                            <StatRow statName={"str"} statValue={this.state.str} incrementProperty={this.incrementProperty.bind(this)} decrementProperty={this.decrementProperty.bind(this)}/>
                            <StatRow statName={"dex"} statValue={this.state.dex} incrementProperty={this.incrementProperty.bind(this)} decrementProperty={this.decrementProperty.bind(this)}/>
                            <StatRow statName={"int"} statValue={this.state.int} incrementProperty={this.incrementProperty.bind(this)} decrementProperty={this.decrementProperty.bind(this)}/>
                            <StatRow statName={"wis"} statValue={this.state.wis} incrementProperty={this.incrementProperty.bind(this)} decrementProperty={this.decrementProperty.bind(this)}/>
                            <StatRow statName={"luc"} statValue={this.state.luc} incrementProperty={this.incrementProperty.bind(this)} decrementProperty={this.decrementProperty.bind(this)}/>
                        </Well>
                    </Col>
                </Row>
            </Panel>
        );
    }
}
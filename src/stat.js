import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';

export default class Stat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statName: this.props.statName,
            statValue: this.props.statValue,
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            statName: props.statName,
            statValue: props.statValue,
        });
    }

    render(){
        let incrementButton = <Button onClick={this.props.crementProperty.bind(this, this.props.statName, 1)} bsStyle={"success"} bsSize={"xs"}>+</Button>;
        let decrementButton = <Button onClick={this.props.crementProperty.bind(this, this.props.statName, -1)} bsStyle={"danger"} bsSize={"xs"}>-</Button>;

        return(
            <Row>
                <div className="col-md-9 text-left">{incrementButton} {decrementButton} {this.props.statName}</div>
                <div className="col-md-3 text-right">{this.state.statValue}</div>
            </Row>
        );
    }
}
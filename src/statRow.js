import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';

export default class StatRow extends Component {
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
        let incrementButton = <Button onClick={this.props.incrementProperty.bind(this, this.props.statName)} bsStyle={"success"} bsSize={"xs"}>+</Button>;
        let decrementButton = <Button onClick={this.props.decrementProperty.bind(this, this.props.statName)} bsStyle={"danger"} bsSize={"xs"}>-</Button>;

        return(
            <Row>
                <div className="col-md-9 text-left">{incrementButton} {decrementButton} Str</div>
                <div className="col-md-3 text-right">{this.state.statValue}</div>
            </Row>
        );
    }
}
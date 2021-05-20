import React, { Component } from 'react';

export default class Temp extends Component {
    constructor(props) {
        super(props);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <div>test temp 123</div>
        );
    }
}
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class Celda extends Component {

    constructor(props){
        super (props);
        this.state = {
            numero: 0
        }
    }

    render () {
        return (
        <div className="celda">
            "machine"
        </div>   
        )
    }

}
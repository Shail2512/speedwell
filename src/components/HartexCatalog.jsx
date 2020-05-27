import React, {Component} from 'react';
import {Paper} from '@material-ui/core';

class HartexCatalog extends Component {
    constructor(props){
        super(props)
        this.state={
            todos : 
            [
                {id:1, description:'Learn React', done:false, targetDate: new Date()},
                {id:2, description:'Learn Dance', done:false, targetDate: new Date()},
                {id:3, description:'Learn Piano', done:false, targetDate: new Date()},
            ]
        }
    }
    render(){
    return (
    <div className="HartexCatalog">
        <h1>This page is under construction. Contact us for any query</h1>

    </div>
  );
}
}

export default HartexCatalog;
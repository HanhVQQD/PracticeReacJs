// import React, {Component} from "react";

import React, { Component } from 'react';

class CompChaVD5 extends Component {
    render() {
        return (
            <div className='blockCon'>
                <div>
                    <img src={this.props.img} width = {250} height = {250}/>
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                </div>
            </div>
        );
    }
}
export default CompChaVD5;
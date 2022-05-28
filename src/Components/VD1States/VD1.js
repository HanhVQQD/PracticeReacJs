import React, { Component } from 'react';

class VD1 extends Component{
    constructor(props) {
      super (props);
      this.state = {
        fields: {
        name: 'Nguyen Tuan Hai',
        email: 'tuanhai2712@gmail.com',
        }
     };
    } 
    render() {
        return(
            <div>
              <h1> {this.state.fields.name}</h1>
              <h1> {this.state.fields.email}</h1>
            </div>
        );
    }
}

export default VD1;

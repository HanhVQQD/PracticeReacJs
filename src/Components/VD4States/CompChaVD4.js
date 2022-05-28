import React, { Component } from 'react';
import Products_data from '../../data/data';

class CompChaVD4 extends Component {
    constructor(props){
        var arr = Products_data();
        super (props);
        this.state = {arr};
    }
    render () {
        return(
            <div className='col-3'> {
                this.state.arr.map(key =>
                    <div> 
                        <img 
                            src={key.img} 
                            alt="anh"
                            style = {{height: 250, width: "auto"}}
                        />
                        <p>{key.name}</p>
                        <p className="price text-danger">Price:{key.price}</p>
                    </div>
                )
            }
            </div>
        );
    }
}

export default CompChaVD4;
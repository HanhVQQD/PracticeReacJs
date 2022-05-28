import React,{ Component } from 'react';
import Products_data from '../../data/data';

class VD4 extends Component{
    constructor(props){
        var arr = Products_data();
        super (props);
        this.state = {arr};
    }
    render () {
        return(
            <div className='container'> {
                this.state.arr.map(key =>
                    <div className='blockCon'>
                        <img style = {{height: 250, width: "auto"}} src={key.img} alt="" />
                        <p>{key.name}</p>
                        <p>Price:{key.price}</p>
                    </div>
                )
            }
            </div>
        );
    }
}

export default VD4;
import React, {Component} from "react"
import Products_data from '../../data/data';
import CompChaVD5 from "./CompChaVD5";

class VD5 extends Component {
    constructor() {
        super()
        this.state = Products_data()
    }
    render() {
        return (
            <div className="container">
                {this.state.map(value =>{
                    return (<CompChaVD5 img={value.img} name={value.name} price={value.price}></CompChaVD5>);
                }
                )
                };
            </div>
);
}
}

export default VD5;
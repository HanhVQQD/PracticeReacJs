import React, { Component } from 'react';
import DanhSachDoUong from './DanhSachDoUong';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            drk:0,
            price:0,
            money:0
        }
    }
    HandlerChange = (event) =>{
        let key = event.target.name;
        let val = event.target.value
        if(key=="drk"){
        if(val=="Milk Coffee"){
            this.setState({price: 12})
        }
        else if (val =="Ice Coffee"){
            this.setState({price: 10})
        }
        else if (val =="Strawberry Sting"){
            this.setState({price: 8})
        }
        else if (val =="Ice Tea"){
            this.setState({price: 2})
        }
        }
        
        this.setState({[key]:val});
        
    }
    HandlerSubmit = (event) =>{
        event.preventDefault();
        this.CheckOrder();
        
    }
    CheckOrder = () =>{
    if(this.state.money == 0 || this.state.money < this.state.price  ){
        alert("Not enough money!");
    }
    else if(this.state.drk ==""){
        alert("Please choose your drink!");
    }
    else alert("Your chosen drink is: "+ this.state.drk + " and the balance is: "+ ((this.state.money)-(this.state.price)) )
    }
    render() {
        return (
            <form onSubmit={this.HandlerSubmit} name="" method="" className="form1">  
                < DanhSachDoUong />
                <table className="menu">
                    <tbody>
                    <td> <h4 className='h4Drink'>Drinks: </h4></td>

                        <tr>
                            <td>Enter the amount you have: </td>
                            <td> <span><input onChange={this.HandlerChange} type="number" name="money" id="money" defaultValue="" /></span> </td>
                        </tr>

                        <tr>
                            <td>Choose the drink: </td>
                            <td>
                                <span>
                                    <select onChange={this.HandlerChange} value={this.state.drink} name="drk" id="drk">
                                        <option>Drinks</option>
                                        <option name="drk1" value="Milk Coffee">Milk Coffee</option>
                                        <option name="drk2" value="Ice Coffee">Ice Coffee</option>
                                        <option name="drk3" value="Strawberry Sting">Strawberry Sting</option>
                                        <option name="drk4" value="Ice Tea">Ice Tea</option>
                                    </select>
                                </span>
                            </td>
                        </tr>
                         
                        <tr>
                            <td>The balance:</td>
                            <td>
                            <label>
                                <span >{((this.state.money) - (this.state.price))}</span>
                            </label>
                            </td>
                        </tr>

                        <tr>
                            <td>Result: </td>
                            <td>
                                <label>
                                    <span>{this.state.drk}</span>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2} align="center">
                            <label><input className='order' type="submit" name="Submit" defaultValue="Order" /></label>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </form>
        );
    }
}

export default Menu;
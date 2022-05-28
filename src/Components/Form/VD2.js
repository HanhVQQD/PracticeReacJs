import React from 'react';
import ReactDOM from 'react-dom';

class VD2 extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }
    myChangeHandler=(event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    render() {
        return ( 
            <div className='VD2form'>
                <form>
                <h1 className='welcome'>Hello {this.state.name} {this.state.age}</h1>
                <p>Enter your name: </p>
                <input
                    type='text'
                    name ='name'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
            </form>
            </div>
        );
    }
}

export default VD2;
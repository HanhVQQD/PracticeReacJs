import React from 'react';
import ReactDOM from 'react-dom';

class VD1 extends React.Component{
    constructor(props){
      super(props);
      this.state = {username: ''}; 
    }
    myChangeHandler = (event) =>{
        this.setState({username: event.target.value});
    }
    render(){
        return(
            <div className='VDform'>
                <form>
                    <h1 className='welcome'>Hello {this.state.username}</h1>
                    <p>Enter your name:</p>
                    <input
                        type='text'
                        onChange={this.myChangeHandler}
                    />
                </form>
            </div>
        ); 
    }
}

export default VD1;
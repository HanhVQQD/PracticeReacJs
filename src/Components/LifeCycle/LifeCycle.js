import React from 'react';

class LifeCycle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           data1: 0,
           data2: 0
        }
        this.setINCREMENT = this.setINCREMENT.bind(this)
        this.setReduction = this.setReduction.bind(this)
    };
    setINCREMENT() {
        this.setState({data1: this.state.data1 + 1})
    }

    setReduction() {
        this.setState({data2: this.state.data2 - 1})
    }
  
        render() {
            return (
            <div className='tbl'>
                <button onClick = {this.setINCREMENT}>INCREMENT</button>
                <Content myNumber = {this.state.data1}></Content>
                <button onClick = {this.setReduction}>Reduction</button>
                <Content myNumber = {this.state.data2}></Content>
            </div>
            );
     }
}
  
    class Content extends React.Component {
            componentWillMount() {
                console.log('Component WILL MOUNT!')
                //alert('Component WILL MOUNT!');
            }
            componentDidMount() {
                console.log('Component DID MOUNT!')
                //alert('Component DID MOUNT!');
            }
        
            componentWillReceiveProps(newProps) {    
                console.log('Component WILL RECIEVE PROPS!')
                //alert('Component WILL RECIEVE PROPS!');
            }
        
            shouldComponentUpdate(newProps, newState) {
                return true;
            }
        
            componentWillUpdate(nextProps, nextState) {
                console.log('Component WILL UPDATE!');
                //alert('Component WILL UPDATE!');
            }
        
            componentDidUpdate(prevProps, prevState) {
                console.log('Component DID UPDATE!')
                //alert('Component DID UPDATE!');
            }
        
            componentWillUnmount() {
                console.log('Component WILL UNMOUNT!')
                //alert('Component WILL UNMOUNT!');
            }
        
            render() {
                return (
                <div>
                    <h3>{this.props.myNumber}</h3>
                </div>
                );
            }
    }

export default LifeCycle;
import React,{ Component } from 'react';
import './App.css';
import Products from './Components/Products'
import Products_data from './data/data';

//=============================BTVN của PROPS==================================================
// function App () {
//     var Arr = getData();
//     var items = Arr.map((infor) => (
//         <Products img = {infor.img} name = {infor.name} price = {infor.price} />
//     ));
//     return (
//         <div className='container'>
//             <div className='row'>
//                 {items}
//             </div>
//         </div>
//     )
// }



// ============================================STATES==========================================: 
//  ------------------VD1--------------------
// class App extends Component{
//     constructor(props) {
//       super (props);
//       this.state = {
//         fields: {
//         name: 'Nguyen Tuan Hai',
//         email: 'tuanhai2712@gmail.com',
//         }
//      };
//     } 
//     render() {
//         return(
//             <div>
//               <h1> {this.state.fields.name}</h1>
//               <h1> {this.state.fields.email}</h1>
//             </div>
//         );
//     }
// }


//-----------------------------------VD3----------------------------------------
// import ReactDOM from 'react-dom';
// class Car extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             brand: "Ford",
//             model: "Mustang",
//             color: "red",
//             year: 1964
//         };
//     }
//     render(){
//         return(
//             <div>
//                 <h1> My {this.state.brand} </h1>
//                 <p>
//                     It is a {this.state.color}
//                     {this.state.model}
//                     from {this.state.year}.
//                 </p>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Car />, document.getElementById('root'));

//-------------------------------------------------VD4-------------------------------
function App() {
    return (
      <div className='container'> 
        <State1></State1>
    </div> ); 
    }

export default App;
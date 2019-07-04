import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//           bareeeeeeeeeeeeeev!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



class App extends React.Component{
  state = {
    conuntry: "armenia",
  }
  constructor(props){
    super(props);
    console.log ("constructor")
  }
  componentDidMount(){
    console.log("componentDidMount")
  }
  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps");
    return null;
  }
// onClickHandler(e){
//     this.setState(country);
//     }
  render(){
    console.log("render")
    return (
      <div>
        Barev Ashxarh o_O{this.state.conuntry}
        <button onClick={this.onClickHandler}>
          poxel text@
          </button>  
          
      </div>
    )
  }
}
console.log("123");
export default App;

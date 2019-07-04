import React from 'react';

import './App.css';



import Header from'./components/Header';

import Footer from'./components/Footer';

import SideBar from'./components/SideBar';

import Content from'./components/Content';






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
    conuntry: "Armenia",
  }
  constructor(props){
    super(props);
    this.handleOnChangeCountry = this.handleOnChangeCountry.bind(this);
  }
  handleOnChangeCountry(){
    this.setState({conuntry: "USA"})
  }
  render(){
    console.log("render")
    return (
      <>
        {/* <p>{this.state.conuntry}</p> 
        <button onClick={this.handleOnChangeCountry}>poxel yerkir@</button>  */}
        <Header/>
        <SideBar/>
        <Footer/>
        <Content/>
        </>
          
      
    )
  }
}
export default App;

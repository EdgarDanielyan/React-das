import React from 'react'

import './App.css';

import './components/Header.css';

import './components/Footer.css';

import './components/SideBar.css';

import './components/Content.css';



import Header from'./components/Header';

import Footer from'./components/Footer';

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
    country: "Armenia",
  }
  constructor(props){
    super(props);
    this.handleOnChangeCountry = this.handleOnChangeCountry.bind(this);
  }
  handleOnChangeCountry(){
    this.setState({country: "USA"})
  }
  render(){
    console.log("render")
    return (
      <>
        {/* <p>{this.state.country}</p>
        <button onClick={this.handleOnChangeCountry}>poxel yerkir@</button>  */}
        <Header/>
        <Content/>
        <Footer/>
        </>
          
      
    )
  }
}
export default App;

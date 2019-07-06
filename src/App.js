import React from 'react'

import {Container, Row, Col} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import './components/Header.css';

import './components/Footer.css';

import './components/SideBar.css';

import './components/Content.css';


import Header from './components/Header';

import Footer from './components/Footer';

import Content from './components/Content';
import SideBar from './components/SideBar';


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


class App extends React.Component {
    state = {
        isSideBarVisible:false
    };

    constructor(props) {
        super(props);
        this.handleOnToggle = this.handleOnToggle.bind(this);
    }

    handleOnToggle() {
       this.setState({isSideBarVisible : !this.state.isSideBarVisible})
    }

    render() {
        console.log("render")
        return (
            <Container fluid>
                <Header onToggleHandler ={this.handleOnToggle}/>
                <Row>
                    {
                        this.state.isSideBarVisible &&(
                        <Col md="3">
                            <SideBar/>
                        </Col>
                        )
                    }
                    <Col md={this.state.isSideBarVisible ? 9 :12}>

                        <Content/>
                    </Col>
                </Row>
                <Footer/>
            </Container>


        )
    }
}

export default App;

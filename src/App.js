import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Settings from './components/Settings';
import Chat from './components/Chat';
import Login from './components/Login';
import ListApp from './components/ListApp';
import Payments from './components/Payments';
import Header from './containers/Header';
import PageFooter from './components/PageFooter'
import Bottombar from './components/BottoBar/botomNavbar'
import Footer from './components/PageFooter/index'
// import Navbar from './components/navbar/navbar'
// import Routerexample from './config/router/router'
class App extends Component {
  render() {
    return (
        <div className = "maindiv" >
      {/* <Routerexample /> */}
      <div className = "header">
      <Header />
      </div>
      <Login />
      <div className="footer">
      <Footer />

      </div>
      <div style={{height: '40vh',}}></div>
      <div className = "bottom"style={{ position: 'fixed',
  top: 590,
  left: 0,
  zIndex: 10,
  width: '100%',
  height: '23px'}}>
        <Bottombar />

        </div>
      {/* <Navbar /> */}
        </div>
    );
  }
}

export default App;

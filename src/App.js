import React, { Component } from 'react';
import { Fragment } from 'react';
import Navbar from './Components/Navbar/Nav.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/footer.jsx';



export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </Fragment>
    )
  }
}

import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Nav from "./components/nav/Nav.js";
import Register from './components/register/Register.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          <Route path="/register" component={Register} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

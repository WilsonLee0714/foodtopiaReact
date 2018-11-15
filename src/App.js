import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar/navbar";
import Content from "./components/content/content";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div className="">
          <Navbar />
          <div className="">
            <Route path="/blog" component={Content} />
          </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Nav.scss";


class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container">
            <Link className="navbar-brand" to="/">Foodtopia</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link class="nav-link" to="/">首頁<span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/">美味食譜</Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/">生鮮食材</Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/">關於我們</Link>
                </li>

              </ul>
              <img id='members' src={require('./icons/profile.png')} />
              <img src={require('./icons/shopping-bag.png')} />
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search" />
                <img src={require('./icons/Group 13.png')} />
              </form>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
  componentDidMount() {
    var members = document.getElementById('members');
    var lightBox = document.getElementById('lightBox');
    members.addEventListener('click',function(){
      lightBox.style.display = 'flex';
      setTimeout(function(){
        lightBox.style.opacity = '1';
      },100)
    })
  }
}

export default Nav;

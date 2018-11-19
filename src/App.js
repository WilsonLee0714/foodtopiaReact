import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar/navbar";
import Content from "./components/content/content";
import Register from './components/register/Register.js';
import RegisterSuccessful from './components/registerSuccessful/RegisterSuccessful.js';
import MemberCenter from './components/memberCenter/MemberCenter.js';
import BasicInfo from './components/basicInfo/BasicInfo.js';
import Subscription from './components/subscription/Subscription.js';
import Favorite from './components/favorite/Favorite.js';
import MyOrder from './components/myOrder/myOrder.js';
import MyService from './components/myService/MyService.js';
import Footer from './components/footer/Footer.js';
import HomePage from './components/homePage/HomePage.js';
import Recipe_list from './components/recipe_list/recipe_list.js';
import Recipe_page from './components/recipe_page/recipe_page';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
            <Route path="/recipe_list" component={Recipe_list} />
            <Route path="/recipe_page" component={Recipe_page} />
            <Route path="/blog" component={Content} />
            <Route path="/homePage" component={HomePage} />
            <Route path="/register" component={Register} />
            <Route path="/registerSuccessful" component={RegisterSuccessful} />
            <div className="container d-flex">
              <Route path="/memberCenter" component={MemberCenter} />
              <Route path="/memberCenter/BasicInfo" component={BasicInfo} />
              <Route path="/memberCenter/subscription" component={Subscription} />
              <Route path="/memberCenter/favorite" component={Favorite} />
              <Route path="/memberCenter/myOrder" component={MyOrder} />
              <Route path="/memberCenter/myService" component={MyService} />
            </div>
            <Footer/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

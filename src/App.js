import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Nav from "./components/nav/Nav.js";
import Order from "./components/order/Order.js";
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
import Login from './components/login/Login.js';
//食材元件匯入
import Ingridient_homepage from './components2/homepage/Ingridient_homepage';
import Ingridient_listpage from './components2/listpage/Ingridient_listpage';
import Fruit from "./components2/listpage/Fruit/Fruit";
import Meat from "./components2/listpage/Meat/Meat";
import Vegetable from "./components2/listpage/Vegetable/Vegetable";
import Seafood from "./components2/listpage/Seafood/Seafood";
import Dairy from "./components2/listpage/Dairy/Dairy";
import Other from "./components2/listpage/Other/Other";
//食譜元件匯入
import Recipe_list from './components/recipe_list/recipe_list.js';
import Recipe_page from './components/recipe_page/recipe_page';
import Recipe_category from './components/recipe_category/recipe_category';
import Recipe_head from './components/recipe_head/recipe_head';
// import SimpleSlider from './components/SimpleSlider/simpleSlider';
// import React_search from './components/recipe_list/search_bar/react-search';
//部落格匯入
import Up_load from "./components/up_load/up_load";
import Test from "./components/test/test";
import New_blog from "./components/new_blog/new_blog";
import Month_blog from "./components/new_blog/month_blog";
require('slick-carousel');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav/>
          <Route path="/homePage" component={HomePage}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/registerSuccessful" component={RegisterSuccessful}/>
          <Route path="/order" component={Order} />
          <div className="container d-flex">
            <Route path="/memberCenter" component={MemberCenter} />
            <Route path="/memberCenter/BasicInfo" component={BasicInfo} />
            <Route path="/memberCenter/subscription" component={Subscription} />
            <Route path="/memberCenter/favorite" component={Favorite} />
            <Route path="/memberCenter/myOrder" component={MyOrder} />
            <Route path="/memberCenter/myService" component={MyService} />
          </div>
          {/* 食材 */}
          
          <Route path="/ingridient_hompage" component={Ingridient_homepage} />
          <Route path="/ingridient_listpage" component={Ingridient_listpage} />
          <Route path="/ingridient_listpage/fruit" component={Fruit} />
          <Route path="/ingridient_listpage/meat" component={Meat} />
          <Route path="/ingridient_listpage/vegetable" component={Vegetable} />
          <Route path="/ingridient_listpage/other" component={Other} />
          <Route path="/ingridient_listpage/seafood" component={Seafood} />
          <Route path="/ingridient_listpage/dairy" component={Dairy} />
          {/* 食譜 */}
          <Route path="/recipe_head" component={Recipe_head} />
          <Route path="/recipe_head/recipe_list" component={Recipe_list} />
          <Route path="/recipe_category/:id?" component={Recipe_category} />
          <Route path="/recipe_head/recipe_category" component={Recipe_category} />
          <Route path="/recipe_page" component={Recipe_page} />
          {/* 部落格 */}
          <Route path="/up_load" component={Up_load} />
          <Route path="/page/:id" component={Recipe_page} />
          <Route path="/new_blog" component={New_blog} />
          <Route path="/month/:id" component={Month_blog} />
          <Footer/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

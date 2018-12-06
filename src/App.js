import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
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
import Cart from "./components/cart/Cart.js";

//食材元件匯入
import Ingridient_homepage from './components/igr_homepage/Ingridient_homepage';
import Ingridient_listpage from './components/igr_listpage/Ingridient_listpage';
import Fruit from "./components/igr_listpage/Fruit/Fruit";
import Meat from "./components/igr_listpage/Meat/Meat";
import Vegetable from "./components/igr_listpage/Vegetable/Vegetable";
import Seafood from "./components/igr_listpage/Seafood/Seafood";
import Dairy from "./components/igr_listpage/Dairy/Dairy";
import Other from "./components/igr_listpage/Other/Other";
import Dairy_board from "./components/igr_listpage/Dairy/Dairy_board";
import Fruit_board from "./components/igr_listpage/Fruit/Fruit_board";
import Meat_board from "./components/igr_listpage/Meat/Meat_board";
import Other_board from "./components/igr_listpage/Other/Other_board";
import Seafood_board from "./components/igr_listpage/Seafood/Seafood_board";
import Vegetable_board from "./components/igr_listpage/Vegetable/Vegetable_board";
//食譜元件匯入
import Recipe_list from './components/recipe_list/recipe_list.js';
import Recipe_page from './components/recipe_page/recipe_page';
// import Recipe_category from './components/recipe_category/recipe_category';
import Recipe_category_country from './components/recipe_list/recipe_list_country';
import Recipe_category_method from './components/recipe_list/recipe_list_people';
import Recipe_category_occasion from './components/recipe_list/recipe_list_occasion';
import Recipe_category_screening from './components/recipe_list/recipe_list_difficult';
import Recipe_category_time from './components/recipe_list/recipe_list_time';
import Recipe_head from './components/recipe_head/recipe_head';
// import SimpleSlider from './components/SimpleSlider/simpleSlider';
// import React_search from './components/recipe_list/search_bar/react-search';
//部落格匯入
import Up_load from "./components/up_load/up_load";
import New_blog from "./components/new_blog/new_blog";
import Month_blog from "./components/new_blog/month_blog";
require('slick-carousel');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      amount:''
    }
  }

  getCart = () => {
    fetch("http://localhost:3000/cart/cart", {
      method: 'GET',
      mode: "cors",
      credentials: 'include',
      })
      .then(res => res.json())
      .then(cart => {
        let amount = cart.reduce((amount, product) => (amount += product.price * product.qty), 0)
        this.setState({products: cart, amount: amount})
      })
}

addCart = (evt) => {
  evt.preventDefault();
  let product_id = evt.target.dataset.product_id
  
    fetch("http://localhost:3000/cart/addCart/" + product_id, {
      method: 'GET',
      mode: "cors",
      credentials: 'include',
      })
      .then(res => res.json())
      .then(() => this.getCart())  
}

cartToggle = () => {
  fetch('http://localhost:3000/session/info', {
    method: 'GET',
    credentials: 'include'
  }).then(function (res) {
    return res.json();
  }).then((session) => {
    if (session.login == 1) {
      let cart = document.querySelector('#cart');
      cart.classList.toggle("openCart");
    } else {
      window.location.assign('/login');
    }
  })
}

componentDidMount = () => {
  this.getCart();
}
componentDidUpdate = () => {

}

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav cartToggle={this.cartToggle} getCart={this.getCart} />
          <Cart cartToggle={this.cartToggle} getCart={this.getCart} products={this.state.products} amount={this.state.amount}/>
          <Route path="/homePage" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/registerSuccessful" component={RegisterSuccessful} />
          <Route path="/order" render={(props) => <Order  {...props}  getCart={this.getCart} products={this.state.products} amount={this.state.amount}/>}/>
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
          <Route path="/ingridient_listpage/fruit" render={(props) => <Fruit {...props} addCart={this.addCart} />}/>
          <Route path="/ingridient_listpage/meat" render={(props) => <Meat {...props} addCart={this.addCart} />}/>
          <Route path="/ingridient_listpage/vegetable" render={(props) => <Vegetable {...props} addCart={this.addCart} />}/>
          <Route path="/ingridient_listpage/other" render={(props) => <Other {...props} addCart={this.addCart} />}/>
          <Route path="/ingridient_listpage/seafood" render={(props) => <Seafood {...props} addCart={this.addCart} />}/>
          <Route path="/ingridient_listpage/dairy" render={(props) => <Dairy {...props} addCart={this.addCart} />}/>
          <Route path="/ingridient_listpage/dairy_board/:id?/:it?/:pic?" component={Dairy_board} />
          <Route path="/ingridient_listpage/fruit_board/:id?/:it?/:pic?" component={Fruit_board} />
          <Route path="/ingridient_listpage/meat_board/:id?/:it?/:pic?" component={Meat_board} />
          <Route path="/ingridient_listpage/other_board/:id?/:it?/:pic?" component={Other_board} />
          <Route path="/ingridient_listpage/seafood_board/:id?/:it?/:pic?" component={Seafood_board} />
          <Route path="/ingridient_listpage/vegetable_board/:id?/:it?/:pic?" component={Vegetable_board} />
          {/* 食譜 */}
          <Route path="/recipe_head" component={Recipe_head} />
          <Route path="/recipe_head/recipe_list" component={Recipe_list} />
          <Route path="/recipe_category/1" component={Recipe_category_country} />
          <Route path="/recipe_category/2" component={Recipe_category_method} />
          <Route path="/recipe_category/3" component={Recipe_category_occasion} />
          <Route path="/recipe_category/4" component={Recipe_category_screening} />
          <Route path="/recipe_category/5" component={Recipe_category_time} />
          {/* <Route path="/recipe_head/recipe_category" component={Recipe_category} /> */}

          <Route path="/recipe_page" render={(props) => <Recipe_page {...props} getCart={this.getCart} />}/>

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

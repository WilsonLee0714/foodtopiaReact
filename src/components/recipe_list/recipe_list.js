import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./recipe_list.scss";

// import Head_slider from './head_slider/head_slider.js';
import Recommend from './recommend/recommend.js';
import Day_rank from './rank/day_rank.js';
import Product_slider from './product_slider/product_slider.js';
import Product_slider_right from './product_slider/product_slider_right.js';
// import Search_bar from './search_bar/search_bar';
import Recipe_page from '../recipe_page/recipe_page.js';
import Recipe_category from "../recipe_category/recipe_category"
import SimpleSlider from '../SimpleSlider/simpleSlider';
import CategoryList from './search_bar/category.json';



class Recipe_list extends Component {
  render() {
    return (
      // <BrowserRouter>
        <React.Fragment>
          <div className="middle_part container d-flex justify-content-center ">
            <Recommend />
            <Day_rank />
          </div>
          {/* <div  className="container d-flex justify-content-center mt-5">
            <Link to="/recipe_category/1" className="category_link col-2">異國料理</Link>
            <Link to="/recipe_category/5" className="category_link col-2">場合料理</Link>
            <Link to="/recipe_category/3" className="category_link col-2">烹調時間</Link>
            <Link to="/recipe_category/4" className="category_link col-2">烹調方式</Link>
            <Link to="/recipe_category/2" className="category_link col-2">選擇食材</Link>
            
          </div > */}
          <div className="container d-flex justify-content-center mt-5">
            {CategoryList.map((category)=>{
                return <Link className="category_link col-2" data-toggle="collapse" href="#collapseExample" to={`/recipe_category/${category.category_id}`}  key={category.category_id}>{category.category}</Link>
                
            })}         
            
          </div>
          <div className="product_slider">
            <Product_slider/>
          </div>
          <div className="product_slider">
            <Product_slider_right/>
          </div>
          <div className="product_slider">
            <Product_slider/>
          
          </div>
          {/* <SimpleSlider/> */}
        </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default Recipe_list;
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./recipe_list.scss";

// import Head_slider from './head_slider/head_slider.js';
import Recommend from './recommend/recommend.js';
import Day_rank from './rank/day_rank.js';
import Product_slider from './recipe_filter/recipe_list_occasion/product_slider.js';
import Product_slider_right from './recipe_filter/recipe_list_occasion/product_slider_right.js';
import Product_slider_buttom from './recipe_filter/recipe_list_occasion/product_slider_buttom.js';
// import Search_bar from './search_bar/search_bar';
import Recipe_page from '../recipe_page/recipe_page.js';
import Recipe_category from "../recipe_category/recipe_category"
import SimpleSlider from '../SimpleSlider/simpleSlider';
import CategoryList from './search_bar/category.json';



class Recipe_list extends Component {
  componentDidMount(){
    // window.scrollTo(0, 400);
  }
  render() {
    return (
      // <BrowserRouter>
        <React.Fragment>
          <div className="middle_part container d-flex justify-content-center ">
            <Recommend />
            <Day_rank />
          </div>
          <div  className="container d-flex justify-content-center mt-5">
            <Link to="/country" className="category_link col-2">異國料理</Link>
            <Link to="/serving" className="category_link col-2">選擇人數</Link>
            <Link to="/occasion" className="category_link col-2">場合料理</Link>
            <Link to="/difficult" className="category_link col-2">烹飪難度</Link>
            <Link to="/time" className="category_link col-2">烹調時間</Link>
            
          </div >
          {/* <div className="container d-flex justify-content-center mt-5">
            {CategoryList.map((category)=>{
                return <Link className="category_link col-2" to={`/recipe_category/${category.category_id}`}  key={category.category_id}>{category.category}</Link>
            })}         
            
          </div> */}
          <div className="product_slider">
            <Product_slider/>
          </div>
          <div className="product_slider">
            <Product_slider_right/>
          </div>
          <div className="product_slider">
            <Product_slider_buttom/>
          
          </div>
          {/* <SimpleSlider/> */}
        </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default Recipe_list;
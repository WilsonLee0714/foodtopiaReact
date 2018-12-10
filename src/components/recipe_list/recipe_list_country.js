import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./recipe_list.scss";

// import Head_slider from './head_slider/head_slider.js';
import Recommend from './recommend/recommend.js';
import Day_rank from './rank/day_rank.js';




class Recipe_list extends Component {
  componentWillMount(){
    window.scrollTo(0, 400);
  }
  constructor(props) {
    super(props);
    this.state = {
      recipe_subs:[],
      recipe_lists:[],
      menus: [],
      id: this.props.id
    }
    console.log(this.state)
  }

  subRecipe_lists = (id) => {
    fetch('http://localhost:3000/api/country/'+id)
        .then(res=>res.json())
        .then(recipe_lists=>{
            console.log(recipe_lists)
            this.setState({
                recipe_lists: recipe_lists
            })
        })
  }
  on_subRecipe_lists =(evt) =>{
      var id = evt.target.dataset.recipe_sub
      this.subRecipe_lists(id);
  }
  
  render() {
    let random_rate= (Math.random() * 5)+4;
    let final_rate= random_rate.toFixed(1);
    
    return (
      // <BrowserRouter>
        <React.Fragment>
          <div className="middle_part container d-flex justify-content-center ">
            <Recommend />
            <Day_rank />
          </div>
          <div  className="container d-flex justify-content-center mt-5">
            <Link to="/country" className="category_link col-2" >異國料理</Link>
            <Link to="/serving" className="category_link col-2" >選擇人數</Link>
            <Link to="/occasion" className="category_link col-2" >場合料理</Link>
            <Link to="/difficult" className="category_link col-2" >烹飪難度</Link>
            <Link to="/time" className="category_link col-2" >烹調時間</Link>
            
          </div >
          {/* {this.state.recipe_subs.map(recipe_sub=>
                <div className="category_link col-2" key={recipe_sub.id} data-recipe_sub={recipe_sub.id} onClick={this.on_subRecipe_lists}>{recipe_sub.category}</div>
            )} */}
          <main className="subCate_nav container d-flex justify-content-center">
            <div className="m-3 sub_link" to="/country/1" onClick={this.on_subRecipe_lists}  key="1" data-recipe_sub="1">日韓料理</div>
            <div className="m-3 sub_link" to="/country/2" onClick={this.on_subRecipe_lists}  key="2" data-recipe_sub="2">中式料理</div>
            <div className="m-3 sub_link" to="/country/3" onClick={this.on_subRecipe_lists}  key="3" data-recipe_sub="3">台灣料理</div>
            <div className="m-3 sub_link" to="/country/4" onClick={this.on_subRecipe_lists}  key="4" data-recipe_sub="4">西式料理</div>
            <div className="m-3 sub_link" to="/country/5" onClick={this.on_subRecipe_lists}  key="5" data-recipe_sub="5">東南亞料理</div>
          </main> 
          
          {/* <React_search/> */}
          {/* 單一食譜 */}
          <div className="category_wrap container">
            <div className="cards d-flex flex-wrap">
              {this.state.recipe_lists.map(recipe_list =>  //menu -> 資料庫名稱
                <div className="p_card">
                    <div className="upper_card">
                    <Link to={`/page/${recipe_list.id}`} >
                        <img className="card_pic" src ={require(`./product_slider/images/${recipe_list.menu_img}.jpg`)} alt="" />
                    </Link>
                        <div className="rate title2">{recipe_list.rating}</div>
                    </div>
                    <div className="lower_card">
                        <div className="recipe_title">{recipe_list.menu}</div>
                        <div className="recipe_text ">{recipe_list.Introduction}</div>
                        <img className="like_btn1" src={require("./product_slider/images/like.svg")}/>
                        <img className="share_btn1" src={require("./product_slider/images/share.svg")}/>
                        <img className="liked_btn1" src={require("./product_slider/images/liked.svg")}/>
                        <img className="shared_btn1" src={require("./product_slider/images/shared.svg")}/>
                    </div> 
                </div> 
              )}
              </div>
            </div>
            {/* 全部食譜 */}
            <div className="category_wrap container">
            {/* <div className="c_category_title ">異國料理</div> */}
              <div className="cards d-flex flex-wrap">
                  {this.state.menus.map(menu =>  
                      <div className="p_card">
                          <div className="upper_card">
                          <Link to={`/page/${menu.id}`} >
                            <img className="card_pic" src ={require(`./product_slider/images/${menu.menu_img}.jpg`)} alt="" />
                          </Link>
                              <div className="rate title2">{menu.rating}</div>
                          </div>
                          <div className="lower_card">
                              <div className="recipe_title">{menu.menu}</div>
                              <div className="recipe_text">{menu.Introduction}</div>
                              <img className="like_btn1" src={require("./product_slider/images/like.svg")}/>
                              <img className="share_btn1" src={require("./product_slider/images/share.svg")}/>
                              <img className="liked_btn1" src={require("./product_slider/images/liked.svg")}/>
                              <img className="shared_btn1" src={require("./product_slider/images/shared.svg")}/>
                          </div> 
                      </div>
                  )}
              </div>
          </div>
          
          {/* <div className="product_slider">
            <Product_slider/>
          </div>
          <div className="product_slider">
            <Product_slider_right/>
          </div>
          <div className="product_slider">
            <Product_slider_buttom/>
          </div> */}
          {/* <SimpleSlider/> */}
        </React.Fragment>
    );
  }
  componentDidMount(){
    // window.scrollTo(0, 100);
    // this.getCountry_subs();
    this.getMenus();
  }
  // getCountry_subs(){
  //   fetch("http://localhost:3000/api/country/:id")
  //   .then(res=>res.json())
  //   .then(console.log(this.state.recipe_subs))
  //   .then(recipe_subs => this.setState({
  //     recipe_subs: recipe_subs
  //   }))
  // }
  //call restful api
  getMenus(){
    fetch("http://localhost:3000/api/recipe")
    .then(res=>res.json())
    .then(menus => this.setState({
        menus: menus
    }))
  }
}

export default Recipe_list;
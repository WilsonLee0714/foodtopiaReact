import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./product_slider.scss";
import xmas from "./xmas_recipes";
import Recipe_category from "../../recipe_category/recipe_category"

class Product_slider_right extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: xmas //設定初始值menus為引入的menus json檔
            // menus: []
          }
    }
    render() {
        return (
          <React.Fragment>
            <div className="p_slider_wrap container d-flex align-items-center">
                <div className="category_wrap container">
                    <div clasName="container d-flex ">
                        <img className="cate_logo" src={require("./images/santa-claus.svg")}/>
                        <div className="category_title title1">聖誕大餐</div>
                    </div>
                    <div className="cards d-flex">
                        {this.state.menus.map(menu =>  //menu -> 資料庫名稱
                            <div className="p_card">
                                    <div className="upper_card">
                                        <img className="card_pic" src ={require(`./images/${menu.menu_img}.jpg`)} alt="" />
                                        <div className="rate title1">{menu.rating}</div>
                                    </div>
                                    
                                    <div className="lower_card">
                                        <div className="card_title title2">{menu.menu}</div>
                                        <div className="card_text text ">{menu.Introduction}</div>
                                        <img className="like_btn" src={require("./images/like.svg")}/>
                                        <img className="share_btn" src={require("./images/share.svg")}/>
                                    </div> 
                            </div>
                            
                        )}
                    </div>
                </div>
                <Link to="/recipe_head/recipe_category">
                    <div className="category_pic">
                        <img src={require("./images/cate_xmas.jpg")}/>
                    </div>
                </Link>
                
                
            </div>
          </React.Fragment>
        );
      }
    }

export default Product_slider_right;
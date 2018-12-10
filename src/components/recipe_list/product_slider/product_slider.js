import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./product_slider.scss";
// 引入json檔資料，並取名叫做menus
import menus from "../../recipe_list.json";
import $ from 'jquery';

class Product_slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: menus //設定初始值menus為引入的menus json檔
            // menus: []
          }
    };
    render() {
        return (
            <React.Fragment>
                <div className="p_slider_wrap container d-flex align-items-center">
                    <div className="category_pic">
                        <img src={require("./images/cate_dark.jpg")}/>
                    </div>
                    <div className="category_wrap container">
                        <div clasName="container d-flex ">
                            <img className="cate_logo" src={require("./images/bells.svg")}/>
                            <div className="category_title title1">獨家推薦</div>
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
                                        <img className="like_btn1" src={require("./images/like.svg")}/>
                                        <img className="share_btn1" src={require("./images/share.svg")}/>
                                        <img className="liked_btn1" src={require("./images/liked.svg")}/>
                                        <img className="shared_btn1" src={require("./images/shared.svg")}/>
                                    </div> 
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
      }
    
    //   componentDidMount(){
    //     this.getMenus();
    //   }
    //   //call restful api
    //   getMenus(){
    //     fetch("http://localhost:3000/api/recipe/")
    //     .then(res=>res.json())
    //     .then(menus => this.setState({
    //         menus: menus
    //     }))
    //   }
    }

export default Product_slider;
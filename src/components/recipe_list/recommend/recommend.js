import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./recommend.scss";



class Recommend extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <React.Fragment>
                <div className="recm_wrap">
                  <img className="recm_star" src={require(`./images/star.svg`)} />
                  <span className="recm_title">每日推薦</span>
                  <Link to="/page/3">
                    <div className="recipe_wrap">
                      <div className="hover_black">
                        <img src={require('./images/china_show_3.jpg')} />
                        <div className="recm_recipe_title">
                          <p className="recm_recipe_h">紅燒芝麻牛肉</p> 
                          <p className="recm_recipe_text">你可能聽說過海鮮醬，但不是每個人都知道它是什麼。</p> 
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
          </React.Fragment>
        );
      }
    }

export default Recommend;
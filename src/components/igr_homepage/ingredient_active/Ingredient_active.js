import React, { Component } from 'react';
import './Ingredient_active.scss';
import { Link } from "react-router-dom";

class Ingredient_active extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sec6_flex container">
          <div className="sec6_left_content">
            <h2>推薦食譜</h2>
            <p>Foodtopia 每日提供多元的推薦食譜，豐富你的飲食生活</p>
            <Link  className="link_sec6" to="/recipe_page">
              <span>立即取得最新推薦</span>
            </Link>
          </div>
          <div className="sec6_right_img"></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Ingredient_active;
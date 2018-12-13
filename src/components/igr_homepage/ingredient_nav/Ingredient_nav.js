import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Ingredient_nav.scss';



class Ingredient_nav extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="b_container container">
          <h2>生鮮食材</h2>
          <nav className="nav nav-pills nav-justified bnav">
            <Link className="bnav-link" to="/ingridient_listpage/fruit">
              <img className="ingNav_icon" src={require('../images/ingNav_fruits.svg')} alt='oops' />
              {/* 圖檔要讀在App.js那層的圖檔資料夾 不同其他子元件才有辦法共用 */}
              <span>新鮮水果</span>
            </Link>

            <Link className="bnav-link" to="/ingridient_listpage/vegetable">
              <img className="ingNav_icon" src={require('../images/ingNav_veg.svg')} alt='oops' />
              <span>新鮮蔬菜</span>
            </Link>
           
            <Link className="bnav-link" to="/ingridient_listpage/meat">
              <img className="ingNav_icon" src={require('../images/ingNav_meat.svg')} alt='oops' />
              <span>肉類</span>
            </Link>
            
            <Link className="bnav-link" to="/ingridient_listpage/dairy">
              <img className="ingNav_icon" src={require('../images/ingNav_diary.svg')} alt='oops' />
              <span>乳製品</span>
            </Link>            
            <Link className="bnav-link" to="/ingridient_listpage/seafood">
              <img className="ingNav_icon" src={require('../images/ingNav_seafood.svg')} alt='oops' />
              <span>海鮮</span>
            </Link>            
            <Link className="bnav-link" to="/ingridient_listpage/other">
              <img className="ingNav_icon" src={require('../images/ingNav_cupboard.svg')} alt='oops' />
              <span>食物櫃</span>
            </Link>             
          </nav>
      </div>
      </React.Fragment>
    )
  }
}

export default Ingredient_nav;
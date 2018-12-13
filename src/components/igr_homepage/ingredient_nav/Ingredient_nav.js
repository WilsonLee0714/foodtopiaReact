import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Ingredient_nav.scss';



class Ingredient_nav extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="b_container container">
          <h2>生鮮食材</h2>
          <nav className="nav nav-pills nav-justified bnav">
            <Link className="bnav-link" to="/ingridient_listpage/fruit">
              <img src={require('./image/test117.jpg')} alt='oops' />
              {/* 圖檔要讀在App.js那層的圖檔資料夾 不同其他子元件才有辦法共用 */}
              <span>新鮮水果</span>
            </Link>

            <Link className="bnav-link" to="/ingridient_listpage/vegetable">
              <img src={require('./image/test117.jpg')} alt='oops' />
              <span>新鮮蔬菜</span>
            </Link>
           
            <Link className="bnav-link" to="/ingridient_listpage/meat">
              <img src={require('./image/test117.jpg')} alt='oops' />
              <span>肉類</span>
            </Link>
            
            <Link className="bnav-link" to="/ingridient_listpage/dairy">
              <img src={require('./image/test117.jpg')} alt='oops' />
              <span>乳製品</span>
            </Link>            
            <Link className="bnav-link" to="/ingridient_listpage/seafood">
              <img src={require('./image/test117.jpg')} alt='oops' />
              <span>海鮮</span>
            </Link>            
            <Link className="bnav-link" to="/ingridient_listpage/other">
              <img src={require('./image/test117.jpg')} alt='oops' />
              <span>食物櫃</span>
            </Link>             
          </nav>
      </div>
      </React.Fragment>
    )
  }
}

export default Ingredient_nav;
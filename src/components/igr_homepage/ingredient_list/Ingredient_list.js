import React, { Component } from 'react';
import './Ingredient_list.scss';

class Ingredient_list extends Component {
  render() {
    return(
    <React.Fragment>
      <div className="container">
      <div className="b_container">
        <h2>產地直送</h2>
        <div className="sec5_card_sec">
          <div className="sec5_card_item">
            {/* 圖檔要讀在App.js那層的圖檔資料夾 */}
            <a href><img src={require('./image/dairytest.jpg')} alt /></a>
            <a href><h3>鮮乳</h3></a>
            <div className="cardprice_bar">
              <img className="icon" src={require('./image/test117.jpg')} alt />
              <p>1280</p>
            </div>
          </div>
          <div className="sec5_card_item">
            <a href><img src={require('./image/seafoodtest.jpg')} alt /></a>
            <a href><h3>白切鮮魚</h3></a>
            <div className="cardprice_bar">
              <img className="icon" src={require('./image/test117.jpg')} alt />
              <p>1280</p>
            </div>
          </div>
          <div className="sec5_card_item">
            <a href><img src={require('./image/meattest.jpg')} alt /></a>
            <a href><h3>牛角丁</h3></a>
            <div className="cardprice_bar">
              <img className="icon" src={require('./image/test117.jpg')} alt />
              <p>1280</p>
            </div>
          </div>
          <div className="sec5_card_item">
            <a href><img src={require('./image/vegetest.jpg')} alt /></a>
            <a href><h3>新鮮蔬菜</h3></a>
            <div className="cardprice_bar">
              <img className="icon" src={require('./image/test117.jpg')} alt />
              <p>1280</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
    )
  }

}

export default Ingredient_list;
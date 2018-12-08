import React, { Component } from 'react';
import './Ingredient_list.scss';

class Ingredient_list extends Component {
  render() {
    return(
    <React.Fragment>
      <div className="b_container container">
        <h2>產地直送</h2>
        <div className="sec5_card_sec">
          <div className="sec5_card_item">
            {/* 圖檔要讀在App.js那層的圖檔資料夾 */}
            <img src={require('./image/dairytest.jpg')} alt />
            <h3>鮮乳</h3>
            <div className="cardprice_bar">
              <img className="icon" src={require('./image/test117.jpg')} alt />
              <p>1280</p>
            </div>
          </div>
          <div className="sec5_card_item">
            <img src={require('./image/seafoodtest.jpg')} alt />
            <h3>白切鮮魚</h3>
            <div className="cardprice_bar">
              <img className="icon" src={require('./image/test117.jpg')} alt />
              <p>1280</p>
            </div>
          </div>
          <div className="sec5_card_item">
            <img src={require('./image/meattest.jpg')} alt />
            <h3>牛角丁</h3>
            <div className="cardprice_bar">
              <img className="icon" src={require('./image/test117.jpg')} alt />
              <p>1280</p>
            </div>
          </div>
          <div className="sec5_card_item">
            <img src={require('./image/vegetest.jpg')} alt />
            <h3>新鮮蔬菜</h3>
            <div className="cardprice_bar">
              <img className="icon" src={require('./image/test117.jpg')} alt />
              <p>1280</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }

}

export default Ingredient_list;
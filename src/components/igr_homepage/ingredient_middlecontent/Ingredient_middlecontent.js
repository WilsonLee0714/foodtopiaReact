import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Ingredient_middlecontent.scss';

class Ingredient_middlecontent extends Component {
  render() {
    return(
    <React.Fragment>
    <div className="sec3_4_container container">

      <div className="sec3">        
        <h2>限時特價</h2>

        <div className="sec3_card_sec">

          <div className="sec3_card_item">
            <img src={require('./image/dairytest.jpg')} alt />
            <div>
              <Link className="" to={`/ingridient_listpage/dairy`}>
              <h4>乳製品</h4>
              </Link>  
              <div className="cardprice_bar">
                <img src={require('./image/test117.jpg')} alt />
                <p>濃醇直達</p>
              </div>
            </div>
          </div>

          <div className="sec3_card_item">
            <img src={require('./image/vegetest.jpg')} alt />
            <div>
              <Link className="" to={`/ingridient_listpage/vegetable`}>
                <h4>新鮮蔬菜</h4>
              </Link>
              <div className="cardprice_bar">
                <img src={require('./image/test117.jpg')} alt />
                <p>天然栽種，營養滿點</p>
              </div>
            </div>
          </div>

        </div>

        <div className="sec3_card_sec">

          <div className="sec3_card_item">
            <img src={require('./image/meattest.jpg')} alt />
            <div>
              <Link className="" to={`/ingridient_listpage/dairy`}>
                <h4>肉類</h4>
              </Link>
              <div className="cardprice_bar">
                <img src={require('./image/test117.jpg')} alt />
                <p>美味快遞，產地直送</p>
              </div>
            </div>
          </div>

          <div className="sec3_card_item">
            <img src={require('./image/seafoodtest.jpg')} alt />
            <div>
              <Link className="" to={`/ingridient_listpage/dairy`}>
                <h4>海鮮</h4>
              </Link>
              <div className="cardprice_bar">
                <img src={require('./image/test117.jpg')} alt />
                <p>肉質彈牙，鮮味滿點</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="sec4">
        <div className="sec4_event1">
          <a href>
            <h3>活動項目</h3>
            <p>活動內容</p>
          </a>
        </div>

        <div className="sec4_event2">
          <a href>
            <h3>活動項目</h3>
            <p>活動內容</p>    
          </a>
        </div>
      </div>

    </div>
    </React.Fragment>
    )
  }

}

export default Ingredient_middlecontent;
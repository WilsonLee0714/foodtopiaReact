import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Ingredient_middlecontent.scss';

class Ingredient_middlecontent extends Component {
  render() {
    return(
    <React.Fragment>
    <div className="sec3_4_container container">

      <div className="sec3">   
        <div className="sec3_title">
          <img className="priceTag" src={require('../images/middle_price_tag.svg')} />
          <span className="sec3_title_txt">限時特價</span>
        </div>     

        <div className="sec3_card_sec">

          <div className="sec3_card_item">
            <Link className="link_sec3" to={`/ingridient_listpage/dairy`}>
              <img src={require('./image/dairy.jpg')} alt="oops" />
            </Link>  
              <div className="sec3_card_txt">
                <h4>乳製品</h4>
                <div className="cardprice_bar">
                  {/* <img src={require('./image/test117.jpg')} alt="oops" /> */}
                  <p>濃醇直達</p>
                </div>
              </div>
          </div>

          <div className="sec3_card_item">
            <img src={require('./image/vegetable.jpg')} alt="oops" />
            <div className="sec3_card_txt">
              <Link className="link_sec3" to={`/ingridient_listpage/vegetable`}>
                <h4>新鮮蔬菜</h4>
              </Link>
              <div className="cardprice_bar">
                {/* <img src={require('./image/test117.jpg')} alt="oops" /> */}
                <p>天然栽種，營養滿點</p>
              </div>
            </div>
          </div>

        </div>

        <div className="sec3_card_sec">

          <div className="sec3_card_item">
            <img src={require('./image/meat.jpg')} alt="oops" />
            <div className="sec3_card_txt">
              <Link className="link_sec3" to={`/ingridient_listpage/meat`}>
                <h4>肉類</h4>
              </Link>
              <div className="cardprice_bar">
                {/* <img src={require('./image/test117.jpg')} alt="oops" /> */}
                <p>美味快遞，產地直送</p>
              </div>
            </div>
          </div>

          <div className="sec3_card_item">
            <img src={require('./image/fruit.jpg')} alt="oops" />
            <div className="sec3_card_txt">
              <Link className="link_sec3" to={`/ingridient_listpage/fruit`}>
                <h4>新鮮水果</h4>
              </Link>
              <div className="cardprice_bar">
                {/* <img src={require('./image/test117.jpg')} alt="oops" /> */}
                <p>台灣品質，果肉飽滿</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="sec4">
        <div className="sec4_event1">
          <div className="event_title">聖誕食材</div>
          <div className="event_intro">聖誕大餐Foodtopia已經幫你備好料了!</div>
          {/* <img className="event1_pic" src={require('../images/event_xmas.jpg')}/> */}
        </div>
        <div className="sec4_event2">
          <div className="event_title">水果季</div>
          <div className="event_intro">一日五蔬果，醫生遠離我</div>
          {/* <img className="event2_pic" src={require('../images/event_fruit.jpg')}/> */}
        </div>
      </div>

    </div>
    </React.Fragment>
    )
  }

}

export default Ingredient_middlecontent;
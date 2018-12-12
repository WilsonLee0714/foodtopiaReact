import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Ingredient_list.scss';

class Ingredient_list extends Component {
  render() {
    return(
    <React.Fragment>
      <div className="bg_container container">

        <h2>產地直送</h2>
        <div className="sec5_card_sec">
          <div className="sec5_card_item">
            <img src={require('./image/PG5113.jpg')} alt />
            <h3>紅肉火龍果</h3>
            <div className="cardprice_bar">
                <div className="line_bar">
                  <p>59元</p>
                  <Link className="link_h" to={`/ingridient_listpage/fruit`}><h5>查看更多</h5></Link>               
                </div>
                <p>新鮮直送，嚴格把關，果肉甜美</p>      
              </div>
          </div>
          <div className="sec5_card_item">
            <img src={require('./image/PG6828.jpg')} alt />
            <h3>紫高麗菜</h3>
            <div className="cardprice_bar">
            <div className="line_bar">
                  <p>89元</p>
                  <Link className="link_h" to={`/ingridient_listpage/vegetable`}><h5>查看更多</h5></Link>               
                </div>
                <p>口感清脆新鮮</p>      
            </div>
          </div>
          <div className="sec5_card_item">
            <img src={require('./image/PG4116.jpg')} alt />
            <h3>吻仔魚</h3>
            <div className="cardprice_bar">
            <div className="line_bar">
                  <p>79元</p>
                  <Link className="link_h" to={`/ingridient_listpage/seafood`}><h5>查看更多</h5></Link>               
                </div>
                <p>保最鮮海味肉質鮮甜，Q彈好嚼勁</p>      
            </div>
          </div>
        </div> 


        <h2>暖冬食材</h2>
        <div className="sec5_card_sec">
          <div className="sec5_card_item">
            <img src={require('./image/PG6204.jpg')} alt />
            <h3>南瓜</h3>
            <div className="cardprice_bar">
                <div className="line_bar">
                  <p>65元</p>
                  <Link className="link_h" to={`/ingridient_listpage/vegetable`}><h5>查看更多</h5></Link>               
                </div>
                <p>口感清脆，低熱量又高纖的高飽足</p>      
              </div>
          </div>
          <div className="sec5_card_item">
            <img src={require('./image/PG1506.jpg')} alt />
            <h3>去骨雞腿肉</h3>
            <div className="cardprice_bar">
            <div className="line_bar">
                  <p>67元</p>
                  <Link className="link_h" to={`/ingridient_listpage/meat`}><h5>查看更多</h5></Link>               
                </div>
                <p>慢活自然熟成，屠宰衛生，肉質鮮美</p>      
            </div>
          </div>
          <div className="sec5_card_item">
            <img src={require('./image/PG3102.jpg')} alt />
            <h3>中華雞蛋豆腐</h3>
            <div className="cardprice_bar">
            <div className="line_bar">
                  <p>23元</p>
                  <Link className="link_h" to={`/ingridient_listpage/other`}><h5>查看更多</h5></Link>               
                </div>
                <p>非基改，堅持真材實料</p>      
            </div>
          </div>
        </div>

        <h2>節慶食材</h2>
        <div className="sec5_card_sec">

          <div className="sec5_card_item">

            <img src={require('./image/PG1101.jpg')} alt />
            <h3>牛肉切丁</h3>

            <div className="cardprice_bar">
                <div className="line_bar">
                  <p>250元</p>
                  <Link className="link_h" to={`/ingridient_listpage/meat`}><h5>查看更多</h5></Link>               
                </div>
                <p>肉質軟嫩富彈性,口感鮮嫩多汁</p>      
              </div>
          </div>

          <div className="sec5_card_item">
            <img src={require('./image/PG1503.jpg')} alt />
            <h3>土雞</h3>
            <div className="cardprice_bar">
            <div className="line_bar">
                  <p>425元</p>
                  <Link className="link_h" to={`/ingridient_listpage/meat`}><h5>查看更多</h5></Link>               
                </div>
                <p>無生長激素，慢活自然熟成</p>      
            </div>
          </div>
          <div className="sec5_card_item">
            <img src={require('./image/PG4128.jpg')} alt />
            <h3>特大鮮甜明蝦</h3>
            <div className="cardprice_bar">
            <div className="line_bar">
                  <p>1988元</p>
                  <Link className="link_h" to={`/ingridient_listpage/seafood`}><h5>查看更多</h5></Link>               
                </div>
                <p>肉質結實且富有彈性</p>      
            </div>
          </div>
        </div> 


      </div>
    </React.Fragment>
    )
  }

}


export default Ingredient_list;
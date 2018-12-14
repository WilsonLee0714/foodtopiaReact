
import React, { Component } from 'react';
import './Ingredient_recipes.scss';

class Ingredient_recipes extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="sec7">
      <div className="b_container">
        <h2 className='mt-5 mb-4'>主題食材</h2>
        <div className="sec7_flex">
          <div className="sec7_card_item">
            <img src={require('./image/vegetable2.jpg')} alt />
            <h3>產地直送</h3>
            <p>產地直送，協助好農精心栽種的蔬果直接送到你手中，從產地到餐桌一路直通。</p>
          </div>
          <div className="sec7_card_item">
            <img src={require('./image/chicken.jpg')} alt />
            <h3>暖冬食材</h3>
            <p>吃對食材，養好體質，冬天來了也不怕，暖冬料理，幫身體打好底!</p>
          </div>
          <div className="sec7_card_item">
            <img src={require('./image/meat2.jpg')} alt />
            <h3>節慶食材</h3>
            <p>邀請好友家人共享堅持嚴選好食材，應景各種文化特色節慶。</p>
          </div>
        </div>
      </div>        
      </div>
      </React.Fragment>
    )
  }
}

export default Ingredient_recipes;
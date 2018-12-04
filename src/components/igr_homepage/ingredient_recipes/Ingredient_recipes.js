
import React, { Component } from 'react';
import './Ingredient_recipes.scss';

class Ingredient_recipes extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="sec7">
      <div className="b_container">
        <h2>Events</h2>
        <div className="sec7_flex">
          <div className="sec7_card_item">
            <img src={require('./image/test13.jpg')} alt />
            <h3>Event1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, rerum!</p>
            <button type="button" class="btn btn-info">Shop now</button>
          </div>
          <div className="sec7_card_item">
            <img src={require('./image/test14.jpg')} alt />
            <h3>Event1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, rerum!</p>
            <button type="button" class="btn btn-info">Info</button>
          </div>
          <div className="sec7_card_item">
            <img src={require('./image/test15.jpg')} alt />
            <h3>Event1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, rerum!</p>
            <button type="button" class="btn btn-info">Info</button>
          </div>
        </div>
      </div>        
      </div>
      </React.Fragment>
    )
  }
}

export default Ingredient_recipes;
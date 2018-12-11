import React, { Component } from 'react';
import './Ingredient_main.scss';

class Ingredient_main extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="b_container container">
          <div className="main_img">
            <div className="main_logo">
                <h1>Foodtopia</h1>
                <h2>生鮮食材</h2>
                <h5>蔬菜、肉、水產、豆、蛋、米麵、水果等優質自然食材，讓您不必出門就可以在家輕鬆享受。</h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Ingredient_main;
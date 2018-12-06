import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Vegetable.scss';

class Vegetable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vegetable:[],
  }
}


getUpdate() {
  fetch("http://localhost:3000/api/ingredients_vegetable")
      .then(res => res.json())
      .then(vegetable => this.setState({
        vegetable: vegetable, 
      }))
};


componentDidMount() {
  this.getUpdate(); 
}

  render() {
    return (
      <React.Fragment>
      <div className="container"> 
      <h2>新鮮蔬菜</h2>
      <div className="sec5_card_sec">
      {this.state.vegetable.map(food =>
          <div className="sec5_card_item">
            <Link className="" to={`/ingridient_listpage/vegetable_board/${food.product_name}/${food.price}/${food.product_img}`}  key={food.product_name + food.price + food.product_img }>{food.product_name}</Link>
            <img src={require(`../igr_img/${food.product_img}.jpg`)} alt="oops" />
            <h3>{food.product_name}</h3>
            <div className="cardprice_bar">
              <img className="icon" src={require('./image/test10.jpg')} alt />
              <p>{food.price}</p>
              <img className="icon" src={require('./image/shopping-bag.png')} onClick={this.cartToggle} />
              <button type="button" class="btn btn-info" data-product_id={food.product_id} onClick={this.props.addCart}>加入購物車</button>
            </div>
          </div>         
        )}
      </div>
      </div>
    </React.Fragment>
    )
  }

}

export default Vegetable;
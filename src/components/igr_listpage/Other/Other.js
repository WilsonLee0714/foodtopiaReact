import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Other.scss';


class Other extends Component {
  constructor(props) {
    super(props)

    this.state = {
      other:[],
  }
}


getUpdate() {
  fetch("http://localhost:3000/api/ingredients_other")
      .then(res => res.json())
      .then(other => this.setState({
        other: other, 
      }))
};


componentDidMount() {
  this.getUpdate(); 
}

  render() {
    return (
      <React.Fragment>
      <div className="container">
      <h2>食物櫃</h2>
      <div className="sec5_card_sec">
      {this.state.other.map(food =>
          <div className="sec5_card_item">
            <img src={require(`../igr_img/${food.product_img}.jpg`)} alt="oops" />
            <h3>
              <Link className="" to={`/ingridient_listpage/other_board/${food.product_name}/${food.product_id}/${food.price}/${food.product_img}/${food.spec}`}  key={food.product_name + food.product_id + food.price + food.product_img}>{food.product_name}</Link>
            </h3>
            <div className="cardprice_bar">
              <img className="icon" src={require('./image/test10.jpg')} alt />
              <p>{food.spec}</p>
              <p>{food.price}元</p>
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

export default Other;
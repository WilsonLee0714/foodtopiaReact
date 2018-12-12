import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Meat.scss';

class Meat extends Component {
  constructor(props) {
    super(props)
    

    this.state = {
      meat:[],
  }
}


getUpdate = () => {
  fetch("http://localhost:3000/api/ingredients_meat", {
    method: 'GET',
    mode: "cors",
    credentials: 'include'})
      .then(res => res.json())
      .then(meat => this.setState({
        meat: meat, 
      }))
};


componentDidUpdate(){
}

componentDidMount() {
  this.getUpdate(); 
}

  render() {
    return (
      <React.Fragment>
      <div className="container">
      <h2>肉類</h2>
      <div className="meat_bar">
        <p>為您推薦各式精采台式調味醬料</p> 
      </div>
      <div className="sec5_card_sec">
      {this.state.meat.map(food =>
          <div className="sec5_card_item">
            <img src={require(`../igr_img/${food.product_img}.jpg`)} alt="oops" />
            <h3>
              <Link className="link_c" to={`/ingridient_listpage/meat_board/${food.product_name}/${food.product_id}/${food.price}/${food.product_img}/${food.spec}`}  key={food.product_name + food.product_id + food.price + food.product_img}>{food.product_name}</Link>
            </h3>
            <div className="cardprice_bar">
              <div className="line_bar">
                <p>{food.price}元</p>
                <button type="button" class="btn btn-info" data-product_id={food.product_id} onClick={this.props.addCart}>加入購物車</button>              
              </div>
                <p>規格: {food.spec}</p>      
            </div>
          </div>         
        )}
      </div>
      </div>
    </React.Fragment>
    )
  }

}

export default Meat;
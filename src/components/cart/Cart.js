import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Cart.scss";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.initState = {
      name: "",
      note: "",
      img: "",
      price: "",
      id: ""
  }

  this.state = {
      products: [],
      product: this.initState,
      type: 'add'
  }
  }
  render() {
    return (
      <React.Fragment>
        <div id='cart' className='cart'>
          <div className='title'>購物車</div>
          <div id='products'>
            <div className='row my-2'>
              <div className='col-5 productImg'>
                <img src={require('./images/1.jpeg')}/>
              </div>
              <div className='col-7 productName'>
                <span>精選土虱</span><br/>
                <span>來自新鮮養殖</span>
              </div>
              <div className='col-5 productNum'>
                <span className='btnMinus'>
                  <i class="fas fa-minus"></i>
                </span>
                <span>1</span>
                <span className='btnPlus'>
                  <i className="fas fa-plus"></i>
                </span>
              </div>
              <div className='col-7 productPrice'>
                <span>NT$ 79</span>
              </div>
            </div>
          </div>
          <div className='container'>
          <hr className='line1'/>
          </div>
          <div className='totalPrice'>
          <span>總計: NT$ 1,573</span>
          </div>
          <button onClick='' type="submit" class="btn btnCheckOut d-flex px-5">開始結帳</button>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {}
}

export default Cart;

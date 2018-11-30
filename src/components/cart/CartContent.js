import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Cart.scss";
import Products from "./Cart.json";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: Products,
      product: {
        id: "",
        name: "",
        note: "",
        num: "",
        img: "",
        perPrice: ""
      },
      amout: 0
    }

  }
  render() {
    return (
      <React.Fragment>
        <div id='cart' className='cart'>
          <div className='title'>購物車</div>
          <div id='products'>
            {this
              .state
              .products
              .map(product => <div className='row my-2'>
                <div className='col-5 productImg'>
                  <img src={require(`${product.img}`)}/>
                </div>
                <div className='col-7 productName'>
                  <span>{product.name}</span><br/>
                  <span>{product.note}</span>
                </div>
                <div className='col-5 productNum'>
                  <span className='btnMinus'>
                    <i class="fas fa-minus"></i>
                  </span>
                  <span>{product.num}</span>
                  <span className='btnPlus'>
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className='col-7 productPrice'>
                  <span>NT$
                  </span>
                  <span>{product.perPrice * product.num}</span>
                </div>
              </div>)}
          </div>
          <div className='container'>
            <hr className='line1'/>
          </div>
          <div className='totalPrice'>
            <span>總計: NT$
            </span>
            <span>{this
                .state
                .products
                .reduce((amout, product) => (amout += product.perPrice * product.num), 0)}</span>
          </div>
          <Link to='/order/step1'>
            <button
              onClick={this.props.cartToggle}
              type="submit"
              class="btn btnCheckOut d-flex px-5">開始結帳</button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    console.log(this.initState);
  }
}

export default Cart;

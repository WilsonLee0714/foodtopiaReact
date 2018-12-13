import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './Ingridient_listpage.scss';
import Ingredient_nav from "../igr_homepage/ingredient_nav/Ingredient_nav";

class Ingridient_listpage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      product: {
        product_id: '',
        product_name: '',
        product_img: 'PG1101',
        price: '',
        spec:''

      },
      modal: false
    }
  }

  product = (evt) => {
    let product = this.state.product
    product['product_id']=evt.target.dataset.product_id
    product['product_name']=evt.target.dataset.product_name
    product['product_img']=evt.target.dataset.product_img
    product['price']=evt.target.dataset.price
    product['spec']=evt.target.dataset.spec
    this.setState({product})
    this.modalToggle()
  }

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  getProducts = category => {
    fetch('http://localhost:3000/ingredients/' + category, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      })
      .then(res => res.json())
      .then(products => this.setState({products}))
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !== nextProps.match.params.category) {
      this.getProducts(nextProps.match.params.category);
    }
  }

  componentDidMount() {
    this.getProducts(this.props.match.params.category);
  }

  render() {
    const category = () => {
      switch (this.props.match.params.category) {
        case 'fruit':
          return '新鮮水果';
        case 'vegetable':
          return '新鮮蔬菜';
        case 'meat':
          return '肉類';
        case 'dairy':
          return '乳製品';
        case 'seafood':
          return '海鮮類';
        case 'other':
          return '食物櫃';
      }
    }
    return (
      <React.Fragment>
        <div className="container">
          <Ingredient_nav/>
          <h2>{category()}</h2>
          <div className="sec5_card_sec">
            {this
              .state
              .products
              .map(food => <div className="sec5_card_item">
                <img
                  data-product_id={food.product_id}
                  data-product_name={food.product_name}
                  data-product_img={food.product_img}
                  data-price={food.price}
                  data-spec={food.spec}
                  onClick={this.product}
                  src={require(`./igr_img/${food.product_img}.jpg`)}
                  alt="oops"/>
                <h3>
                  <Link
                    className="link_c"
                    to={`/ingridient_listpage/dairy_board/${food.product_name}/${food.product_id}/${food.price}/${food.product_img}/${food.spec}`}
                    key={food.product_name + food.product_id + food.price + food.product_img}>{food.product_name}</Link>
                </h3>
                <div className="cardprice_bar">
                  <div className="line_bar">
                    <p>{food.price}元</p>
                    <button
                      type="button"
                      class="btn btn-info"
                      data-product_id={food.product_id}
                      onClick={this.props.addCart}>加入購物車</button>
                  </div>
                  <p>規格: {food.spec}</p>
                </div>
              </div>)}
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.modalToggle} className=''>
          <ModalHeader toggle={this.modalToggle}>Modal title</ModalHeader>
          <ModalBody>
            <div className="board_sec container">
              <img
                src={require(`./igr_img/${this.state.product.product_img}.jpg`)}
                onError={(e)=>e.target.src='http://localhost:3000/uploads/chef.png'}
                alt="oops"/>

              <div className="board_right">
                <h2>{this.state.product.product_name}</h2>
                <h4>產品價格: {this.state.product.price}元</h4>
                <h4>產品規格: {this.state.product.spec}</h4>
                <p>嚴格把關原料來源、製程細節，無添加防腐劑香料。</p>
                <hr/>
                <button disabled data-product_id={this.state.product.product_id} onClick={this.props.addCart} className="btn btn-info">加入購物車</button>
                <p>Foodtopia 提供最多元及新鮮食材給你!</p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.modalToggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.modalToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}

export default Ingridient_listpage;
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col
} from 'reactstrap';
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
        spec: '',
        description: ''
      },
      modal: false
    }
  }

  product = (evt) => {
    let product = this.state.product
    product['product_id'] = evt.target.dataset.product_id
    product['product_name'] = evt.target.dataset.product_name
    product['product_img'] = evt.target.dataset.product_img
    product['price'] = evt.target.dataset.price
    product['spec'] = evt.target.dataset.spec
    product['description'] = evt.target.dataset.description
    this.setState({product})
    this.modalToggle()
  }

  addCart = (evt) => {
    if (this.state.modal) {
      this.modalToggle();
      this
        .props
        .addCart(evt);
    }
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
              .map(product => <div className="sec5_card_item">
                <img
                  data-product_id={product.product_id}
                  data-product_name={product.product_name}
                  data-product_img={product.product_img}
                  data-price={product.price}
                  data-spec={product.spec}
                  data-description={product.description}
                  onClick={this.product}
                  src={require(`./igr_img/${product.product_img}.jpg`)}
                  alt="oops"/>
                <h3>
                  <Link
                    className="link_c"
                    to={`/ingridient_listpage/dairy_board/${product.product_name}/${product.product_id}/${product.price}/${product.product_img}/${product.spec}`}
                    key={product.product_name + product.product_id + product.price + product.product_img}>{product.product_name}</Link>
                </h3>
                <div className="cardprice_bar">
                  <div className="line_bar">
                    <p>{product.price}元</p>
                    <button
                      type="button"
                      class="btn btn-info"
                      data-product_id={product.product_id}
                      onClick={this.props.addCart}>加入購物車</button>
                  </div>
                  <p>規格: {product.spec}</p>
                </div>
              </div>)}
          </div>
        </div>
        <Modal isOpen={this.state.modal} className='product_modal'>
          <Container>
            <ModalHeader toggle={this.modalToggle} className='modal_header'>產品詳情：</ModalHeader>
            <ModalBody>
              <Row>
                <Col xs={5}>
                    <img
                      src={require(`./igr_img/${this.state.product.product_img}.jpg`)}
                      className="img-fluid img-thumbnail product_img"
                      alt=""/>
                </Col>
                <Col className='px-0' xs={7}>
                  <Col className='product_name'>{this.state.product.product_name}</Col>
                  <Col className='product_spec'>{this.state.product.spec}</Col>
                  <Col className='product_price'>平台優惠價： <span>NT$ {this.state.product.price}</span></Col>
                  <hr/>
                  <Col>{this.state.product.description}</Col>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button
                className='btn_addCart'
                color='danger'
                data-product_id={this.state.product.product_id}
                onClick={this.addCart}>加入購物車</Button>

            </ModalFooter>
          </Container>
        </Modal>
      </React.Fragment>
    )
  }
}

export default Ingridient_listpage;
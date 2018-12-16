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
      modal: false,
      alert: false
    }
  }

  product = (evt) => {
    let product = this.state.product
    product['product_id'] = evt.currentTarget.dataset.product_id
    product['product_name'] = evt.currentTarget.dataset.product_name
    product['product_img'] = evt.currentTarget.dataset.product_img
    product['price'] = evt.currentTarget.dataset.price
    product['spec'] = evt.currentTarget.dataset.spec
    product['description'] = evt.currentTarget.dataset.description
    this.setState({product})
    this.modalToggle()
  }

  addCart = (evt) => {
    if (this.state.modal) {
      this.modalToggle();
      this
        .props
        .addCart(evt);
      this.alertToggle();
    }
  }

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  alertToggle = () => {
    this.setState({
      alert: !this.state.alert
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
        <Ingredient_nav/>
        <Container className='bg_container'>
          <hr/>
          <h2 className=''>{category()}</h2>
          <Row className="card_sec">
            {this
              .state
              .products
              .map(product => <Col
                xs={2}
                className="card_item"
                data-product_id={product.product_id}
                data-product_name={product.product_name}
                data-product_img={product.product_img}
                data-price={product.price}
                data-spec={product.spec}
                data-description={product.description}
                onClick={this.product}>
                <Col
                className='card_img'>
                  <img
                    className='img-fluid'
                    src={require(`./igr_img/${product.product_img}.jpg`)}
                    alt="oops"/>
                </Col>
                <Col
                  className='card_name'>
                  <h3>
                    {product.product_name}
                  </h3>
                </Col>
                <Col
                  className="card_linebar">
                  <span
                    className='card_price'>NT$ {product.price}</span>
                  <span><img
                    className='card_icon'
                    src={require('./images/addCart.svg')}/></span>

                </Col>
                <Col
                  className='card_spec'>
                  規格: {product.spec}
                </Col>
              </Col>)}
          </Row>
        </Container>

        <Modal isOpen={this.state.modal} toggle={this.modalToggle} className='product_modal'>
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
                  <Col className='product_price'>平台優惠價：
                    <span>NT$ {this.state.product.price}</span>
                  </Col>
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

        <Modal isOpen={this.state.alert} toggle={this.alertToggle} className='alert_modal'>
        <Container>
          <ModalHeader toggle={this.alertToggle} className='modal_header'>商品已加入購物車</ModalHeader>
          <ModalBody>
            <Col>
              <img
                className='tada'
                src={require('../registerSuccessful/images/checkOK.png')}/>
            </Col>
            <Col className='alert_content'>
                如要調整數量請至購物車修改
            </Col>
          </ModalBody>
          <ModalFooter className='modal_footer'>
            <Button className='btn_alert' color='danger' onClick={this.props.cartToggle}>購物車</Button>{' '}
            <Button className='btn_alert' color="primary" onClick={this.alertToggle}>關閉</Button>
          </ModalFooter>
        </Container>

        </Modal>
      </React.Fragment>
    )
  }
}

export default Ingridient_listpage;
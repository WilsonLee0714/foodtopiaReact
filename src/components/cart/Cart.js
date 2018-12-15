import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col,Modal,
  ModalHeader,
  ModalBody,
  ModalFooter} from 'reactstrap';
import './Cart.scss';
import $ from 'jquery';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  modify = (evt) => {
    evt.preventDefault();
    let sid = evt.target.dataset.sid,
      type = evt.target.dataset.type;
    fetch('http://localhost:3000/cart/cart/', {
      method: 'PUT',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({sid: sid, type: type})
      })
      .then(res => res.json())
      .then(message => console.log(message))
      .then(() => this.props.getCart());
  }

  toOrder = (evt) => {
    evt.preventDefault();
    if (!this.props.products.length) {
      alert('購物車內沒有商品')
    } else {
      this
        .props
        .cartToggle();
      window
        .location
        .assign('/order');
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

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const cartOpen = () => {
      if (this.props.cartOpen) {
        return 'cart cartOpen'
      } else {
        return 'cart'
      }
    }
    return (
      <React.Fragment>
        <div id='cart' className={cartOpen()}>
          <div className='title'>購物車</div>
          <div className='cartContent'>
            {this
              .props
              .products
              .map(product => <Row key={product.sid} className='pt-2 productContent'>
                <Col xs={5}>
                  <Col
                    data-product_id={product.product_id}
                    data-product_name={product.product_name}
                    data-product_img={product.product_img}
                    data-price={product.price}
                    data-spec={product.spec}
                    data-description={product.description}>
                    <img
                      className='productImg'
                      data-product_id={product.product_id}
                      data-product_name={product.product_name}
                      data-product_img={product.product_img}
                      data-price={product.price}
                      data-spec={product.spec}
                      data-description={product.description}
                      onClick={this.product}
                      src={require(`../igr_listpage/igr_img/${product.product_img}.jpg`)}/>
                  </Col>
                  <Col className='productQty'>
                    <Button
                      color='danger'
                      className='btnMP'
                      data-sid={product.sid}
                      data-type='min'
                      onClick={this.modify}>
                      <i className='fas fa-minus' data-sid={product.sid} data-type='min'></i>
                    </Button>
                    {product.qty}
                    <Button
                      color='danger'
                      className='btnMP'
                      data-sid={product.sid}
                      data-type='plus'
                      onClick={this.modify}>
                      <i className='fas fa-plus' data-sid={product.sid} data-type='plus'></i>
                    </Button>
                  </Col>
                </Col>
                <Col className='productInfo' xs={5}>
                  <Col className='productName'>{product.product_name}</Col>
                  <Col className='productSpec'>{product.spec}</Col>
                  <Col className='productPrice'>NT$ {product.price * product.qty}</Col>
                </Col>
                <Col
                  className='btnDelete'
                  xs={2}
                  data-sid={product.sid}
                  data-type='del'
                  onClick={this.modify}>
                  <span>
                    <i className='fas fa-trash-alt' data-sid={product.sid} data-type='del'></i>
                  </span>
                </Col>
              </Row>)}
          </div>
          <Container>
            <hr className='line1'/>
          </Container>
          <Col className='totalPrice'>
            總計: NT$ {this.props.amount}
          </Col>
          <Row>
            <Col xs={{
              size: 6,
              offset: 3
            }}>

              <Button color='danger' onClick={this.toOrder} className='btnCheckOut'>結帳</Button>
            </Col>
          </Row>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.modalToggle} className='product_modal'>
          <Container>
            <ModalHeader toggle={this.modalToggle} className='modal_header'>產品詳情：</ModalHeader>
            <ModalBody>
              <Row>
                <Col xs={5}>
                  <img
                    src={require(`../igr_listpage/igr_img/${this.state.product.product_img}.jpg`)}
                    className="img-fluid img-thumbnail product_img"
                    alt=""/>
                </Col>
                <Col className='px-0' xs={7}>
                  <Col className='product_name'>{this.state.product.product_name}</Col>
                  <Col className='product_spec'>{this.state.product.spec}</Col>
                  <Col className='product_price'>平台優惠價：
                    <span>NT$ {this.state.product.price}</span>
                  </Col>
                  <Col>{this.state.product.description}</Col>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Container>
        </Modal>
      </React.Fragment>
    );
  }

  componentDidMount() {}

  componentDidUpdate() {}
}

export default Cart;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col} from 'reactstrap';
import './Cart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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

  render() {
    return (
      <React.Fragment>
        <div id='cart' className='cart'>
          <div className='title'>購物車</div>
          <div>
            {this
              .props
              .products
              .map(product => <Row key={product.sid} className='pt-2'>
                <Col sm={5}>
                  <Col>
                    <img
                      className='productImg'
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
                <Col className='productInfo' sm={5}>
                  <Col className='productName'>{product.product_name}</Col>
                  <Col className='productSpec'>{product.spec}</Col>
                  <Col className='productPrice'>NT$ {product.price * product.qty}</Col>
                </Col>
                <Col
                  className='btnDelete'
                  sm={2}
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
            <Col sm={{
              size: 6,
              offset: 3
            }}>
              <Link to='/order'>
                <Button color='danger' onClick={this.props.cartToggle} className='btnCheckOut'>結帳</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {}

  componentDidUpdate() {}
}

export default Cart;

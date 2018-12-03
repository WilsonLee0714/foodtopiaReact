import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, Container, Row, Col} from 'reactstrap';
import "./Cart.scss";
// import Products from "./Cart.json";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      amount: '',
      email: '',
      product: {
        sid: "",
        qty: ""
      }
    }
  }

  getCart = () => {
    // 先取得session.email，再撈取個人購物車
    fetch('http://localhost:3000/session/info', {
      method: 'GET',
      credentials: 'include'
    }).then(res => {
      return res.json();
    }).then(session => {
      let email = session.email
      fetch("http://localhost:3000/cart/cart", {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({email: email})
        })
        .then(res => res.json())
        .then(cart => {
          let amount = cart.reduce((amount, product) => (amount += product.price * product.qty), 0)
          this.setState({products: cart, amount: amount, email: email})
        })
    })
  }

  modify = (evt) => {
    evt.preventDefault();
    let sid = evt.target.dataset.sid,
        type = evt.target.dataset.type;
    switch (type) {
      case "min":
        fetch("http://localhost:3000/cart/cart/" + sid, {
          method: 'GET'
        }).then(res => res.json())
          .then(data => {
            let oldQty = data[0].qty;
            if (oldQty > 1) {
              let qty = oldQty - 1
              fetch("http://localhost:3000/cart/cart/" + sid, {
                method: 'PUT',
                mode: "cors",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({qty: qty})
              }).then(res => this.getCart())
            }
          });
        break;
      case "plus":
        fetch("http://localhost:3000/cart/cart/" + sid, {
          method: 'GET'
        }).then(res => res.json())
          .then(data => {
            let oldQty = data[0].qty,
              qty = oldQty + 1
            fetch("http://localhost:3000/cart/cart/" + sid, {
              method: 'PUT',
              mode: "cors",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({qty: qty})
            }).then( res => this.getCart())
          });
        break;
      case "del":
        fetch("http://localhost:3000/cart/cart/" + sid, {
          method: 'DELETE'
        }).then(res => this.getCart())
        break;
    }
  }

  update = (member) => {
    fetch('http://localhost:3000/api/members/' + member.id, {
      method: 'PUT',
      body: JSON.stringify(member),
        headers: new Headers({'Content-Type': 'application/json'})
      })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        this.getMembers();

      })
  }

  render() {
    return (
      <React.Fragment>
        <div id='cart' className='cart'>
          <div className='title'>購物車</div>
          <div>
            {this
              .state
              .products
              .map(product => <Row key={product.sid} className='pt-2'>
                <Col sm={5}>
                  <Col>
                    <img
                      className='productImg'
                      src={require(`./images/${product.product_img}.jpeg`)}/>
                  </Col>
                  <Col className='productQty'>
                    <Button
                      color='danger'
                      className='btnMP'
                      data-sid={product.sid}
                      data-type="min"
                      onClick={this.modify}>
                      <i className="fas fa-minus" data-sid={product.sid} data-type="min"></i>
                    </Button>
                    {product.qty}
                    <Button
                      color='danger'
                      className='btnMP'
                      data-sid={product.sid}
                      data-type="plus"
                      onClick={this.modify}>
                      <i className="fas fa-plus" data-sid={product.sid} data-type="plus"></i>
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
                  data-type="del"
                  onClick={this.modify}>
                  <span>
                    <i 
                    className="fas fa-trash-alt"
                    data-sid={product.sid}
                    data-type="del"></i>
                  </span>
                </Col>
              </Row>)}
          </div>
          <Container>
            <hr className='line1'/>
          </Container>
          <Col className='totalPrice'>
            總計: NT$ {this.state.amount}
          </Col>
          <Row>
            <Col sm={{
              size: 6,
              offset: 3
            }}>
              <Link to='/order/step1'>
                <Button color='danger' onClick={this.props.cartToggle} className="btnCheckOut">結帳</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.getCart();
  }

  componentDidUpdate() {
    console.log(this.state);
  }
}

export default Cart;

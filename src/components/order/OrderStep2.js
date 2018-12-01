import React, {Component} from 'react';
import {Button, Container, Row, Col} from 'reactstrap';
import {getYear, getMonth, getDate, getHours} from 'date-fns';
import "./Order.scss";

class OrderStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      amount: ''
    }
  }

  getCart = () =>{
    let email = this.props.fields.email;
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
          this.setState({products: cart, amount: amount})
        })
  }

  lastStep = (evt) => {
    evt.preventDefault();
    this
      .props
      .step(1);

  }

  render() {
    const ymd = () => {
      let day = this.props.fields.date,
        time = this.props.fields.time,
        year = getYear(day),
        month = getMonth(day)+1,
        date = getDate(day),
        hours = getHours(time);
      return `${year}/${month}/${date} ${hours}:00 前送達`
    }

    const shipWay = () => {
      switch (this.props.fields.mod) {
        case 'home':
          return `宅配到府`
      }
    }

    const payWay = () => {
      switch (this.props.fields.pay) {
        case 'card':
          return `信用卡`
        case 'atm':
          return `ATM轉帳`
        case 'payAfter':
          return `貨到付款`
      }
    }

    return (
      <React.Fragment>
        <div className='formContent'>
          <div className='contentTitle'>訂單詳情</div>
          <div className='titleBackground'></div>
          <Container>
            <Row className='checkInfo'>
              <Col xs={3} className='productTitle'></Col>
              <Col xs={3} className='productTitle'>品名</Col>
              <Col xs={2} className='productTitle'>數量</Col>
              <Col xs={2} className='productTitle'>單價</Col>
              <Col xs={2} className='productTitle'>總價</Col>
            </Row>
            {this
              .state
              .products
              .map(product => < Row className = 'checkInfo' > 
              <Col
                xs={{
                size: 2,
                offset: 1
              }}
                className='productDetail'>
                <img className='productImg' src={require(`../cart/images/${product.product_img}.jpeg`)}/>
              </Col> 
              < Col xs = {3}
              className = 'px-0' > 
              <Col className='productName'>{product.product_name}</Col> 
              <Col className='productSpec'>{product.spec}</Col>
              </Col > 
              <Col xs={2} className='productDetail'>{product.qty}</Col>
              <Col xs={2}
              className='productDetail'>NT$ {product.price}</Col>
              <Col xs={2} className='productDetail'>NT$ {product.qty*product.price}</Col > 
              </Row>)}
            <hr className='line1'/>
            <Row className='checkInfo'>
              <Col
                xs={{
                size: 3,
                offset: 7
              }}
                className='amountTitle'>結帳總金額：
              </Col>
              <Col xs={2} className='amount'>NT$ {this.state.amount}
              </Col>
            </Row>
          </Container>
        </div>
        <div className='formContent'>
          <div className='contentTitle'>訂單資訊</div>
          <div className='titleBackground'></div>
          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>姓名：</Col>
            <Col xs={10} className='colPadding'>{this.props.fields.name}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>市話：</Col>
            <Col xs={10} className='colPadding'>{this.props.fields.tel}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>手機：</Col>
            <Col xs={10} className='colPadding'>{this.props.fields.mobile}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>地址：</Col>
            <Col xs={10} className='colPadding'>{`${this.props.fields.city} ${this.props.fields.dist} ${this.props.fields.address}`}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>寄送方式：</Col>
            <Col xs={10} className='colPadding'>{shipWay()}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>收件時間：</Col>
            <Col xs={10} className='colPadding'>{ymd()}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>備註事項：</Col>
            <Col xs={10} className='colPadding'>{this.props.fields.note}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>付款方式：</Col>
            <Col xs={10} className='colPadding'>{payWay()}</Col>
          </Row>
        </div>
        <Row>
          <Col sm={3}>
            <Button className='btnNext' color='primary' onClick={this.lastStep}>上一步</Button>
          </Col>
          <Col sm={{
            size: 3,
            offset: 6
          }}>
            <Button className='btnNext' color='danger' onClick=''>確認結帳</Button>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.state);
    console.log(this.props.fields)
    this.getCart();
  }
  componentDidUpdate(){
  }
}

export default OrderStep2;

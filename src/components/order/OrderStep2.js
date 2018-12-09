import React, {Component} from 'react';
import {Button, Container, Row, Col} from 'reactstrap';
import './Order.scss';

class OrderStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  checkout = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:3000/order/order', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({fields: this.props.fields, products: this.props.products, amount: this.props.amount})
      })
      .then(res => res.json())
      .then(message => console.log(message))
      .then(() => this.props.step(3));
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
        year = day.getFullYear(),
        month = day.getMonth() + 1,
        date = day.getDate(),
        hours = time.getHours();
      return `${year}/${month}/${date} ${hours}:00 前送達`
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
              .props
              .products
              .map(product => <Row className='checkInfo' key={product.sid}>
                <Col
                  xs={{
                  size: 2,
                  offset: 1
                }}
                  className='productDetail'>
                  <img
                    className='productImg'
                    src={require(`../igr_listpage/igr_img/${product.product_img}.jpg`)}/>
                </Col>
                <Col xs={3} className='px-0'>
                  <Col className='productName'>{product.product_name}</Col>
                  <Col className='productSpec'>{product.spec}</Col>
                </Col >
                <Col xs={2} className='productDetail'>{product.qty}</Col>
                <Col xs={2} className='productDetail'>NT$ {product.price}</Col>
                <Col xs={2} className='productDetail'>NT$ {product.qty * product.price}</Col >
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
              <Col xs={2} className='amount'>NT$ {this.props.amount}
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
            <Col xs={10} className='colPadding'>{`${this.props.fields.zipCode} ${this.props.fields.county} ${this.props.fields.district} ${this.props.fields.address}`}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>寄送方式：</Col>
            <Col xs={10} className='colPadding'>{this.props.fields.ship}</Col>
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
            <Col xs={10} className='colPadding'>{this.props.fields.pay}</Col>
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
            <Button className='btnNext' color='danger' onClick={this.checkout}>確認結帳</Button>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {}
}

export default OrderStep2;

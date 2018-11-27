import React, {Component} from 'react';
import {Button, Container, Row, Col} from 'reactstrap';
import "./Order.scss";

class OrderStep2 extends Component {
  constructor(props) {
    super(props);
  }

  lastStep = (evt) => {
    evt.preventDefault();

    window
      .location
      .assign('/order/step1');
  }

render() {
  return (
    <React.Fragment>
      <div className='formContent'>
        <div className='contentTitle'>訂單詳情</div>
        <div className='titleBackground'></div>
      </div>
      <div className='formContent'>
        <div className='contentTitle'>訂單資訊</div>
        <div className='titleBackground'></div>
        <Row className='rowHeight'>
          <Col xs={2} className='inputLabel rowHeight'>姓名 :</Col>
          <Col xs={10} className='colPadding'>{this.props.name}</Col>
        </Row>

        <Row>
          <Col xs={2} className='inputLabel'>市話 :</Col>
          <Col xs={10} className='colPadding'>{this.props.tel}</Col>
        </Row>

        <Row>
          <Col xs={2} className='inputLabel'>手機 :</Col>
          <Col xs={10} className='colPadding'>{this.props.phone}</Col>
        </Row>

        <Row>
          <Col xs={2} className='inputLabel'>地址 :</Col>
          <Col xs={10} className='colPadding'>{`${this.props.city} ${this.props.dist} ${this.props.address}`}</Col>
        </Row>

        <Row>
          <Col xs={2} className='inputLabel'>寄送方式 :</Col>
          <Col xs={10} className='colPadding'>{this.props.mod}</Col>
        </Row>

        <Row>
          <Col xs={2} className='inputLabel'>收件時間 :</Col>
          <Col xs={10} className='colPadding'>{`${this.props.date} ${this.props.time}`}</Col>
        </Row>

        <Row>
          <Col xs={2} className='inputLabel'>備註事項 :</Col>
          <Col xs={10} className='colPadding'>{this.props.note}</Col>
        </Row>

        <Row>
          <Col xs={2} className='inputLabel'>付款方式 :</Col>
          <Col xs={10} className='colPadding'>{this.props.mod}</Col>
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
}

export default OrderStep2;

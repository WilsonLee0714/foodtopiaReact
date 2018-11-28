import React, {Component} from 'react';
import {Button, Container, Row, Col} from 'reactstrap';
import {getYear, getMonth, getDate, getHours} from 'date-fns';

import "./Order.scss";

class OrderStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
        month = getMonth(day),
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
        </div>
        <div className='formContent'>
          <div className='contentTitle'>訂單資訊</div>
          <div className='titleBackground'></div>
          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>姓名 :</Col>
            <Col xs={10} className='colPadding'>{this.props.fields.name}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>市話 :</Col>
            <Col xs={10} className='colPadding'>{this.props.fields.tel}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>手機 :</Col>
            <Col xs={10} className='colPadding'>{this.props.fields.phone}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>地址 :</Col>
            <Col xs={10} className='colPadding'>{`${this.props.fields.city} ${this.props.fields.dist} ${this.props.fields.address}`}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>寄送方式 :</Col>
            <Col xs={10} className='colPadding'>{shipWay()}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>收件時間 :</Col>
            <Col xs={10} className='colPadding'>{ymd()}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>備註事項 :</Col>
            <Col xs={10} className='colPadding'>{this.props.fields.note}</Col>
          </Row>

          <Row className='checkInfo'>
            <Col xs={2} className='inputLabel'>付款方式 :</Col>
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
    console.log(this.state)
  }
}

export default OrderStep2;

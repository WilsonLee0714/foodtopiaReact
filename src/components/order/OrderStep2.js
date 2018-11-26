import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import "./Order.scss";

class OrderStep2 extends Component {
  constructor(props) {
    super(props);
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
              <Col xs={10} className='colPadding'>資策會</Col>
            </Row>

            <Row>
              <Col xs={2} className='inputLabel'>市話 :</Col>
              <Col xs={10} className='colPadding'></Col>
            </Row>

            <Row>
              <Col xs={2} className='inputLabel'>手機 :</Col>
              <Col xs={10} className='colPadding'></Col>
            </Row>

            <Row>
              <Col xs={2} className='inputLabel'>地址 :</Col>
              <Col xs={10} className='colPadding'></Col>
            </Row>

            <Row>
              <Col xs={2} className='inputLabel'>寄送方式 :</Col>
              <Col xs={10} className='colPadding'></Col>
            </Row>

            <Row>
              <Col xs={2} className='inputLabel'>收件時間 :</Col>
              <Col xs={10} className='colPadding'></Col>
            </Row>

            <Row>
              <Col xs={2} className='inputLabel'>備註事項 :</Col>
              <Col xs={10} className='colPadding'></Col>
            </Row>

            <Row>
              <Col xs={2} className='inputLabel'>付款方式 :</Col>
              <Col xs={10} className='colPadding'></Col>
            </Row>
        </div>
      </React.Fragment>
    )
  }
}

export default OrderStep2;

import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {BrowserRouter, Route, Link} from "react-router-dom";
import "./Order.scss";
import OrderStep1 from "./OrderStep1";
import OrderStep2 from "./OrderStep2";
import Order_successful from "./Order_successful";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      products: this.props.products,
      amount: this.props.amount
    };
  }

  save = (fields) => {
    this.setState({fields});
  }

  step = (data) => {
    this.setState({step: data});
  }

  render() {
    const step = () => {
      switch (this.state.step) {
        case 1:
          return <OrderStep1 fields={this.state.fields} save={this.save} step={this.step}/>;
        case 2:
          return <OrderStep2 fields={this.state.fields} save={this.save} step={this.step} getCart={this.getCart} products={this.state.products} amount={this.state.amount}/>;
        case 3:
          return <Order_successful/>;
      }
    }
    const step1Class = () => {
      switch (this.state.step) {
        case 1:
          return 'step active'
        case 2:
          return 'step done'
        case 3:
          return 'step done'
      }
    }
    const step2Class = () => {
      switch (this.state.step) {
        case 1:
          return 'step'
        case 2:
          return 'step active'
        case 3:
          return 'step done'
      }
    }
    const step3Class = () => {
      switch (this.state.step) {
        case 1:
          return 'step'
        case 2:
          return 'step'
        case 3:
          return 'step active'
      }
    }
    const step1NumClass = () => {
      switch (this.state.step) {
        case 1:
          return 1
        case 2:
          return <i class="fas fa-check doneIcon"></i>
        case 3:
          return <i class="fas fa-check doneIcon"></i>
      }
    }
    const step2NumClass = () => {
      switch (this.state.step) {
        case 1:
          return 2
        case 2:
          return 2
        case 3:
          return <i class="fas fa-check doneIcon"></i>
      }
    }
    const step3NumClass = () => {
      switch (this.state.step) {
        case 1:
          return 3
        case 2:
          return 3
        case 3:
          return 3
      }
    }
    const step2LineClass = () => {
      switch (this.state.step) {
        case 1:
          return 'stepLine'
        case 2:
          return 'stepLine active'
        case 3:
          return 'stepLine done'
      }
    }
    const step3LineClass = () => {
      switch (this.state.step) {
        case 1:
          return 'stepLine'
        case 2:
          return 'stepLine'
        case 3:
          return 'stepLine active'
      }
    }
    return (
        <React.Fragment>
          <Container className='orderPage'>
            <Row className='orderStep'>
              <Col xs={2} className='stepTitle'>購買流程</Col>
            <Col xs={10} className='px-0 d-flex justify-content-center'>
              <div className={step1Class()} id='step1'>
                <div className='stepNum' id='step1Num'>{step1NumClass()}</div>
                <div className='stepText'>填寫資料</div>
                <div className='stepIcon'>
                  <i class="fas fa-edit"></i>
                </div>
              </div>
              <div className={step2LineClass()} id='step2Line'></div>
              <div className={step2Class()} id='step2'>
                <div className='stepNum' id='step2Num'>{step2NumClass()}</div>
                <div className='stepText'>資料確認</div>
                <div className='stepIcon'>
                  <i class="fas fa-money-check"></i>
                </div>
              </div>
              <div className={step3LineClass()} id='step3Line'></div>
              <div className={step3Class()} id='step3'>
                <div className='stepNum' id='step2Num'>{step3NumClass()}</div>
                <div className='stepText'>訂購完成</div>
                <div className='stepIcon'>
                  <i class="fas fa-truck"></i>
                </div>
              </div>
            </Col>

            </Row>
            {step()}
            {/* <Route path="/order/step1"  component={(props) => <OrderStep1 {...props} fields={this.state.fields} save={this.save}/>}/>
            <Route path="/order/step2"  component={(props) => <OrderStep2 {...props} fields={this.state.fields}/>}/> */}
          </Container>
        </React.Fragment>
    )
  }
  componentDidMount() {
    console.log(this.state)
  }
  componentDidUpdate() {
    console.log(this.state)
  }
}

export default Order;

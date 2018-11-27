import React, {Component, PropTypes} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {BrowserRouter, Route, Link, withRouter} from "react-router-dom";
import "./Order.scss";
import OrderStep1 from "./OrderStep1";
import OrderStep2 from "./OrderStep2";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  save = (data) => {
    let fields = this.state.fields;
    fields = data;
    console.log(fields)
    this.setState({fields});
    console.log(this.state);
    // this.props.history.push('/order/step2/');

    // window
    //   .location
    //   .assign('/order/step2');
  }
  render() {
    return (

      <BrowserRouter>
        <React.Fragment>
          <Container className='orderPage'>
            <div className='orderStep d-flex'>
              <div className='stepTitle'>購買流程</div>
              <div className='step' id='step1'>
                <div className='stepNum' id='step1Num'>1</div>
                <div className='stepText'>填寫資料</div>
                <div className='stepIcon'>
                  <i class="fas fa-edit"></i>
                </div>
              </div>
              <div className='stepLine' id='step2Line'></div>
              <div className='step' id='step2'>
                <div className='stepNum' id='step2Num'>2</div>
                <div className='stepText'>資料確認</div>
                <div className='stepIcon'>
                  <i class="fas fa-money-check"></i>
                </div>
              </div>
              <div className='stepLine' id='step3Line'></div>
              <div className='step' id='step3'>
                <div className='stepNum' id='step2Num'>3</div>
                <div className='stepText'>訂購完成</div>
                <div className='stepIcon'>
                  <i class="fas fa-truck"></i>
                </div>
              </div>
            </div>
            <Route path="/order/step1"  component={(props) => <OrderStep1 {...props} fields={this.state.fields} save={this.save}/>}/>
            <Route path="/order/step2"  component={(props) => <OrderStep2 {...props} fields={this.state.fields}/>}/>
            {/* <Route path="/order/step2" formData={this.state.fields} component={OrderStep2}/> */}
          </Container>
        </React.Fragment>
      </BrowserRouter>
    )
  }
  componentDidMount() {
    let step1 = document.querySelector('#step1'),
      step1Num = document.querySelector('#step1Num'),
      step2Line = document.querySelector('#step2Line'),
      step2 = document.querySelector('#step2'),
      step2Num = document.querySelector('#step2Num'),
      step3Line = document.querySelector('#step3Line'),
      step3 = document.querySelector('#step3');
    if (window.location.href == 'http://localhost:3000/order/step1') {
      step1
        .classList
        .add('active');
    }
    if (window.location.href == 'http://localhost:3000/order/step2') {
      step1
        .classList
        .add('done');
      step1Num.innerHTML = `<i class="fas fa-check doneIcon"></i>`;
      step2Line
        .classList
        .add('active');
      step2
        .classList
        .add('active');
    }
    if (window.location.href == 'http://localhost:3000/order/step3') {
      step1
        .classList
        .add('done');
      step1Num.innerHTML = `<i class="fas fa-check doneIcon"></i>`;
      step2Line
        .classList
        .add('done');
      step2
        .classList
        .add('done');
      step2Num.innerHTML = `<i class="fas fa-check doneIcon"></i>`;
      step3Line
        .classList
        .add('active');
      step3
        .classList
        .add('active');
    }
    console.log(this.state)
    console.log(window.location.href)
  }
  componentDidUpdate(){
    let step1 = document.querySelector('#step1'),
      step1Num = document.querySelector('#step1Num'),
      step2Line = document.querySelector('#step2Line'),
      step2 = document.querySelector('#step2'),
      step2Num = document.querySelector('#step2Num'),
      step3Line = document.querySelector('#step3Line'),
      step3 = document.querySelector('#step3');
    if (window.location.href == 'http://localhost:3000/order/step1') {
      step1
        .classList
        .add('active');
    }
    if (window.location.href == 'http://localhost:3000/order/step2') {
      step1
        .classList
        .add('done');
      step1Num.innerHTML = `<i class="fas fa-check doneIcon"></i>`;
      step2Line
        .classList
        .add('active');
      step2
        .classList
        .add('active');
    }
    if (window.location.href == 'http://localhost:3000/order/step3') {
      step1
        .classList
        .add('done');
      step1Num.innerHTML = `<i class="fas fa-check doneIcon"></i>`;
      step2Line
        .classList
        .add('done');
      step2
        .classList
        .add('done');
      step2Num.innerHTML = `<i class="fas fa-check doneIcon"></i>`;
      step3Line
        .classList
        .add('active');
      step3
        .classList
        .add('active');
    }
  }
}

export default Order;

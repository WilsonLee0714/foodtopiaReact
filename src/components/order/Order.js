import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Order.scss";
import OrderStep1 from "./OrderStep1";
import OrderStep2 from "./OrderStep2";

class Order extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <div className='container'>
        <div className='orderStep d-flex'>
          <div className='stepTitle'>購買流程</div>
          <div className='step active'>
            <div className='stepNum'>1</div>
            <div className='stepContent'>填寫資料</div>
            <div className='stepIcon'><i class="fas fa-edit"></i></div>
          </div>
          <div className='stepLine'></div>
          <div className='step'>
            <div className='stepNum'>2</div>
            <div className='stepContent'>資料確認</div>
            <div className='stepIcon'><i class="fas fa-money-check"></i></div>
          </div>
          <div className='stepLine'></div>
          <div className='step'>
            <div className='stepNum'>3</div>
            <div className='stepContent'>訂購完成</div>
            <div className='stepIcon'><i class="fas fa-truck"></i></div>
          </div>
        </div>
        <Route path="/order/step1" component={OrderStep1}/>
        <Route path="/order/step2" component={OrderStep2}/>
        </div>
      </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default Order;

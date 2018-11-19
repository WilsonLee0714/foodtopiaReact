import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Order.scss";

class Order extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <div className='orderStep d-flex'>
          <div className='stepTitle'>購買流程</div>
          <div className='step active'>
            <div className='stepNum'>1</div>
            <div className='stepCentent'>填寫資料</div>
            <div className='stepIcon'><i class="fas fa-edit"></i></div>
          </div>
          <div className='stepLine'></div>
          <div className='step'>
            <div className='stepNum'>2</div>
            <div className='stepCentent'>資料確認</div>
            <div className='stepIcon'><i class="fas fa-money-check"></i></div>
          </div>
          <div className='stepLine'></div>
          <div className='step'>
            <div className='stepNum'>3</div>
            <div className='stepCentent'>訂購完成</div>
            <div className='stepIcon'><i class="fas fa-truck"></i></div>
          </div>
        </div>
      </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default Order;

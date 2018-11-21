import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import "./Order.scss";
import TwCitySelector from "tw-city-selector/tw-city-selector";

class OrderStep1 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    new TwCitySelector({
      el: '.my-selector-c',
      elCounty: '.county', // 在 el 裡查找 dom
      elDistrict: '.district', // 在 el 裡查找 dom
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className='stepContent'>
          <div className='contentTitle'>收件資訊</div>
          <div className='titleBackground'></div>
          <form className='orderForm'>
            <label className='inputTitle2' htmlFor="name">姓名 :</label>
            <input className='inputBorder' type="text" id="name"/>
            <br/>
            <label className='inputTitle2' htmlFor="tel">市話 :</label>
            <input className='inputBorder' type="text" id="tel"/>
            <br/>
            <label className='inputTitle2' htmlFor="phone">手機 :</label>
            <input className='inputBorder' type="text" id="phone"/>
            <br/>
            <div className="my-selector-c addressSelect">
              <label className='inputTitle2' htmlFor="address">地址 :</label>
              <select className="selectBorder county"></select>
              <select className="selectBorder district"></select>
              <input className='inputBorder' type="text" id="address"/>
            </div>
            <div>
            <label className='inputTitle4' htmlFor="express">寄送方式 :</label>
            <input className='shipWay' type="radio" name="shipWay" id="express" value="宅配到府" checked/>
            <span>宅配到府</span>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}
export default OrderStep1;

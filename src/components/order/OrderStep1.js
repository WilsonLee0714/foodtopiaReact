import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import "./Order.scss";
import TwCitySelector from "tw-city-selector/tw-city-selector";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {setHours, getDate} from 'date-fns';
import {setMinutes} from 'date-fns';
import {addDays} from 'date-fns';
import {addHours} from 'date-fns';
import {getHours} from 'date-fns';

class OrderStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      today: true
    };
  }
  handleChange = (evt) => {
    let key = evt.target.id;
    let data = evt.target.value;
    this.setState({[key]: data})
  }
  dateChange = (date) => {
    this.setState({date: date});
    if (getDate(date) == getDate(new Date())) {
      this.setState({today: true});
    } else {
      this.setState({today: false});
    }
  }
  timeChange = (time) => {
    this.setState({time: time});
  }

  componentDidMount() {
    new TwCitySelector({
      el: '.my-selector-c', elCounty: '.county', // 在 el 裡查找 dom
      elDistrict: '.district', // 在 el 裡查找 dom
    });
    console.log(this.state)
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
            <div className=''>
              <label className='inputTitle4' htmlFor="express">寄送方式 :</label>
              <input
                className='shipWay'
                type="radio"
                name="shipWay"
                id="express"
                value="宅配到府"
                checked/>
              <label className='wayName'>宅配到府</label>
            </div>
            <div class="d-flex">
              <label className='inputTitle4' htmlFor="shipTime">送達時間 :</label>
              <DatePicker
                className="selectDate"
                selected={this.state.date}
                onChange={this.dateChange}
                dateFormat="yyyy/MM/dd"
                minDate={getHours(new Date()) > 17
                ? addDays(new Date(), 1)
                : new Date()}
                maxDate={addDays(new Date(), 7)}
                id="startDate"
                placeholderText="選擇日期"/>
              <DatePicker
                className="selectTime"
                selected={this.state.time}
                onChange={this.timeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                minTime={this.state.today === true
                ? setHours(setMinutes(new Date(), 0), getHours(addHours(new Date(), 2)))
                : setHours(setMinutes(new Date(), 0), 10)}
                maxTime={setHours(setMinutes(new Date(), 0), 20)}
                dateFormat="h:mm aa"
                timeCaption="Time"
                placeholderText="選擇時間"/>
            </div>
            <div class="d-flex">
              <label className='inputTitle4 shipNoteTitle' htmlFor="shipNote">備註事項 :</label>
              <textarea class="shipNote" id="shipNote" rows="2"></textarea>
            </div>
          </form>
        </div>
        <div className='stepContent'>
          <div className='contentTitle'>付款方式</div>
          <div className='titleBackground'></div>
          <form className='orderForm'>
            <div className="">
              <input
                className="shipWay"
                type="radio"
                name="payWay"
                id="creditCard"
                value="信用卡"
                checked/>
              <label className="wayName" for="creditCard">
                信用卡
              </label>
            </div>
            <div className="">
              <input
                className="shipWay"
                type="radio"
                name="payWay"
                id="atmPay"
                value="ATM轉帳"/>
              <label className="wayName" for="atmPay">
                ATM轉帳
              </label>
            </div>
            <div className="">
              <input
                className="shipWay"
                type="radio"
                name="payWay"
                id="payAfter"
                value="貨到付款"/>
              <label className="wayName" for="payAfter">
                貨到付款
              </label>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}
export default OrderStep1;

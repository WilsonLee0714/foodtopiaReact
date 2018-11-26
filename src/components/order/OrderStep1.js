import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import "./Order.scss";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import TwCitySelector from "tw-city-selector/tw-city-selector";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  setMinutes,
  getHours,
  setHours,
  addHours,
  getDate,
  addDays
} from 'date-fns';

class OrderStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tel: '',
      phone: '',
      city: '',
      dist: '',
      address: '',
      mod: 'home',
      date: '',
      time: '',
      note: '',
      pay: '',
      // today: 'false'
    };
  }
  handleChange = (evt) => {
    let key = evt.target.id;
    let data = evt.target.value;
    this.setState({[key]: data});
    console.log(this.state);
  }
  modChange = (evt) => {
    let choose = evt.target.value;
    this.setState({mod: choose})
  }
  dateChange = (date) => {
    this.setState({date: date});
    // if (getDate(date) == getDate(new Date())) {   this.setState({today: true}); }
    // else {   this.setState({today: false}); }
  }
  timeChange = (time) => {
    this.setState({time: time});
  }
  payChange = (evt) => {
    let choose = evt.target.value;
    this.setState({pay: choose})
  }
  checkForm = (evt) => {
    evt.preventDefault();
  }

  render() {

    const minHours = () => {
      var today
      if (getDate(this.state.date) == getDate(new Date())) {
        today = true;
      } else {
        today = false;
      }
      if (today) {
        if (getHours(new Date()) > 7) {
          return setHours(setMinutes(new Date(), 0), getHours(addHours(new Date(), 2)))
        } else {
          return setHours(setMinutes(new Date(), 0), 10);
        }
      } else {
        return setHours(setMinutes(new Date(), 0), 10);
      }
    }

    return (
      <React.Fragment>
        <Form className='orderForm'>
          <div className='formContent'>
            <div className='contentTitle'>收件資訊</div>
            <div className='titleBackground'></div>

            <FormGroup row>
              <Label for='name' className='inputLabel' sm={2}>*姓名 :</Label>
              <Col className='colPadding' sm={10}>
                <Input
                  id='name'
                  className='inputContent'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.name}/>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for='tel' className='inputLabel' sm={2}>市話 :</Label>
              <Col className='colPadding' sm={10}>
                <Input
                  id='tel'
                  className='inputContent'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.tel}
                  placeholder=''/>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for='phone' className='inputLabel' sm={2}>*手機 :</Label>
              <Col className='colPadding' sm={10}>
                <Input
                  id='phone'
                  className='inputContent'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.phone}/>
              </Col>
            </FormGroup>

            <FormGroup className='my-selector-c addressSelect' row>
              <Label for='city' className='inputLabel' sm={2}>*地址 :</Label>
              <Input
                id='city'
                className='county'
                type='select'
                onChange={this.handleChange}
                value={this.state.city}/>
              <Input
                id='dist'
                className='district'
                type='select'
                onChange={this.handleChange}
                value={this.state.dist}/>
              <Input
                id='address'
                className='inputContent'
                type='text'
                onChange={this.handleChange}
                value={this.state.address}/>
            </FormGroup>

            <FormGroup row>
              <Label className='inputLabel' sm={2}>*寄送方式 :</Label>
              <Label className='' check sm={10}>
                <Input
                  id="home"
                  className='shipMod'
                  type="radio"
                  name="shipMod"
                  value="home"
                  onChange={this.modChange}
                  checked={this.state.mod === 'home'}/>
                宅配到府</Label>
            </FormGroup>

            <FormGroup className='' row>
              <Label for="shipTime" className='inputLabel' sm={2}>*送達時間 :</Label>
              <Col className='colPadding' sm={10}>
                <DatePicker
                  className="timeSelect"
                  selected={this.state.date}
                  onChange={this.dateChange}
                  dateFormat="yyyy/MM/dd"
                  minDate={getHours(new Date()) > 17
                  ? addDays(new Date(), 1)
                  : new Date()}
                  maxDate={addDays(new Date(), 7)}
                  placeholderText="選擇日期"/>
                <DatePicker
                  className="timeSelect"
                  selected={this.state.time}
                  onChange={this.timeChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  minTime={minHours()}
                  maxTime={setHours(setMinutes(new Date(), 0), 20)}
                  dateFormat="h:mm aa"
                  timeCaption="時間"
                  placeholderText="選擇時間"/>
              </Col>
            </FormGroup>

            <FormGroup row className='my-0'>
              <Label for='note' className='inputLabel noteLabel' sm={2}>備註事項 :</Label>
              <Col className='colPadding' sm={10}>
                <Input
                  id='note'
                  className='inputContent noteContent'
                  type='textarea'
                  onChange={this.handleChange}
                  value={this.state.note}/>
              </Col>
            </FormGroup>
          </div>

          <div className='formContent'>
            <div className='contentTitle'>付款方式</div>
            <div className='titleBackground'></div>

            <FormGroup row className='my-0'>
              <Label className='payName' check sm={{
              size: 10,
              offset: 2
            }}>
                <Input
                  className='payMod'
                  type="radio"
                  name="payWay"
                  value="card"
                  onChange={this.payChange}
                  checked={this.state.pay === 'card'}/>
                信用卡</Label>
              <Label className='payName' check sm={{
              size: 10,
              offset: 2
            }}>
                <Input
                  className='payMod'
                  type="radio"
                  name="payWay"
                  value="atm"
                  onChange={this.payChange}
                  checked={this.state.pay === 'atm'}/>
                ATM轉帳</Label>
              <Label className='payName' check sm={{
              size: 10,
              offset: 2
            }}>
                <Input
                  className='payMod'
                  type="radio"
                  name="payWay"
                  value="payAfter"
                  onChange={this.payChange}
                  checked={this.state.pay === 'payAfter'}/>
                貨到付款</Label>
            </FormGroup>

          </div>
          <FormGroup row>
            <Col sm={{
              size: 3,
              offset: 9
            }}>
              <Button className='btnNext' color='danger' onClick={this.checkForm}>下一步</Button>
            </Col>
          </FormGroup>
        </Form>
      </React.Fragment>
    )
  }
  componentDidMount() {
    new TwCitySelector({
      el: '.my-selector-c', elCounty: '.county', // 在 el 裡查找 dom
      elDistrict: '.district', // 在 el 裡查找 dom
    });
  }
}
export default OrderStep1;

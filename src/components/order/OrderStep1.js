import React, {Component} from 'react';
import './Order.scss';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  setMinutes,
  getHours,
  setHours,
  addHours,
  getDate,
  addDays
} from 'date-fns';
import {ZipCodeTW} from 'zipcode-tw-react';

class OrderStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        member_sid: '',
        name: '',
        tel: '',
        mobile: '',
        ship: '宅配到府',
        county: '',
        district: '',
        zipCode: '',
        address: '',
        date: '',
        time: '',
        note: '',
        pay: '信用卡'
      },
      errors: {}
    };
  }

  handleZipCodeChange = (e) => {
    let {countyValue, districtValue, zipValue} = e,
      fields = this.state.fields;
    fields['zipCode'] = zipValue
    fields['county'] = countyValue
    fields['district'] = districtValue
    this.setState({fields});
  }
  handleChange = (evt) => {
    let key = evt.target.id,
      value = evt.target.value,
      fields = this.state.fields;
    fields[key] = value;
    this.setState({fields});
    console.log(this.state);
  }
  shipChange = (evt) => {
    let ship = evt.target.value,
      fields = this.state.fields;
    fields['ship'] = ship;
    this.setState({fields});
  }
  dateChange = (date) => {
    let fields = this.state.fields;
    fields['date'] = date;
    this.setState({fields});

  }
  timeChange = (time) => {
    let fields = this.state.fields;
    fields['time'] = time;
    this.setState({fields});
  }
  payChange = (evt) => {
    let pay = evt.target.value,
      fields = this.state.fields;
    fields['pay'] = pay;
    this.setState({fields});
  }

  handleValidation = () => {
    let fields = this.state.fields,
      errors = {},
      formIsValid = true;

    //Name
    if (!fields['name']) {
      formIsValid = false;
      errors['name'] = '姓名為必填欄位';
    }

    //Tel
    if (fields['tel'] !== '') {
      if (!fields['tel'].match(/^(0\d{8,10})(?:(?:#)(\d+))?$/)) {
        formIsValid = false;
        errors['tel'] = '請輸入正確格式，例 0223456789#123';
      }
    }

    //mobile
    if (!fields['mobile']) {
      formIsValid = false;
      errors['mobile'] = '手機為必填欄位';
    } else if (typeof fields['mobile'] !== 'undefined') {
      if (!fields['mobile'].match(/^09\d{8}/)) {
        formIsValid = false;
        errors['mobile'] = '請輸入正確格式，例 0912345678';
      }
    }

    //Address
    if (!fields['county']) {
      formIsValid = false;
      errors['address'] = '地址為必填欄位';
    } else if (!fields['district']) {
      formIsValid = false;
      errors['address'] = '地址為必填欄位';
    } else if (!fields['address']) {
      formIsValid = false;
      errors['address'] = '地址為必填欄位';
    }

    //Date
    if (!fields['date']) {
      formIsValid = false;
      errors['date'] = '送達時間為必選欄位';
    } else if (!fields['time']) {
      formIsValid = false;
      errors['date'] = '送達時間為必選欄位';
    }

    this.setState({errors});
    return formIsValid;
  }

  save = (evt) => {
    evt.preventDefault();
    if (this.handleValidation()) {
      this
        .props
        .save(this.state.fields);
      this
        .props
        .step(2);
    } else {
      return
    }
  }

  render() {
    const minHours = () => {
      let today
      if (getDate(this.state.fields.date) == getDate(new Date())) {
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
        <Form>
          <div className='formContent'>
            <div className='contentTitle'>收件資訊</div>
            <div className='titleBackground'></div>

            <FormGroup row>
              <Label for='name' className='inputLabel' md={2} sm={3}>*姓名 :</Label>
              <Col className='colPadding' md={10} sm={9}>
                <Input
                  id='name'
                  className='inputContent'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.fields.name}/>
              </Col>
              <Col
                className='colPadding'
                md={{
                size: 10,
                offset: 2
              }}
                sm={{
                size: 9,
                offset: 3
              }}>
                <span className='errorTip'>{this.state.errors['name']}</span>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for='tel' className='inputLabel' md={2} sm={3}>市話 :</Label>
              <Col className='colPadding' md={10} sm={9}>
                <Input
                  id='tel'
                  className='inputContent'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.fields.tel}/>
              </Col>
              <Col
                className='colPadding'
                md={{
                size: 10,
                offset: 2
              }}
                sm={{
                size: 9,
                offset: 3
              }}>
                <span className='errorTip'>{this.state.errors['tel']}</span>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for='mobile' className='inputLabel' md={2} sm={3}>*手機 :</Label>
              <Col className='colPadding' md={10} sm={9}>
                <Input
                  id='mobile'
                  className='inputContent'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.fields.mobile}/>
              </Col>
              <Col
                className='colPadding'
                md={{
                size: 10,
                offset: 2
              }}
                sm={{
                size: 9,
                offset: 3
              }}>
                <span className='errorTip'>{this.state.errors['mobile']}</span>
              </Col>
            </FormGroup>

            <FormGroup className='addressSelect' row>
              <Label for='county' className='inputLabel' md={2} sm={3}>*地址 :</Label>
              <Col className='colPadding d-flex' md='auto' sm={9}>
                <ZipCodeTW
                  displayType='text'
                  countyValue={this.state.fields.county}
                  districtValue={this.state.fields.district}
                  zipCodeValue={this.state.fields.zipCode}
                  countyStyle={{
                  width: '85px',
                  display: 'flex'
                }}
                  districtStyle={{
                  width: '85px',
                  display: 'flex'
                }}
                  zipStyle={{
                  width: '63px',
                  display: 'flex',
                  textAlign: 'center'
                }}
                  zipCodePositionLast={false}
                  handleChangeCounty={this.handleZipCodeChange}
                  handleChangeDistrict={this.handleZipCodeChange}
                  handleChangeZipCode={this.handleZipCodeChange}
                  handleBlurZipCode={this.handleZipCodeChange}
                  handleZipCodeNotExists={this.handleZipCodeChange}/>
              </Col>
              <Col
                className='colPadding addressInput'
                md={{
                size: 'auto',
                offset: 0
              }}
                sm={{
                size: 9,
                offset: 3
              }}>
                <Input
                  id='address'
                  className='inputContent '
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.fields.address}/>
              </Col>
              <Col
                className='colPadding'
                md={{
                size: 10,
                offset: 2
              }}
                sm={{
                size: 9,
                offset: 3
              }}>
                <span className='errorTip'>{this.state.errors['address']}</span>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label className='inputLabel' md={2} sm={3}>*寄送方式 :</Label>
              <Label className='' check md={10} sm={9}>
                <Input
                  id='home'
                  className='ship'
                  type='radio'
                  name='ship'
                  value='宅配到府'
                  onChange={this.shipChange}
                  checked={this.state.fields.ship === '宅配到府'}/>
                宅配到府</Label>
            </FormGroup>

            <FormGroup className='' row>
              <Label for='shipTime' className='inputLabel' md={2} sm={3}>*送達時間 :</Label>
              <Col className='colPadding' md={10} sm={9}>
                <DatePicker
                  className='timeSelect'
                  selected={this.state.fields.date}
                  onChange={this.dateChange}
                  dateFormat='yyyy/MM/dd'
                  minDate={getHours(new Date()) > 17
                  ? addDays(new Date(), 1)
                  : new Date()}
                  maxDate={addDays(new Date(), 7)}
                  placeholderText='選擇日期'/>
                <DatePicker
                  className='timeSelect'
                  selected={this.state.fields.time}
                  onChange={this.timeChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  minTime={minHours()}
                  maxTime={setHours(setMinutes(new Date(), 0), 20)}
                  dateFormat='hh:mm aa'
                  timeCaption='時間'
                  placeholderText='選擇時間'/>
              </Col>
              <Col
                className='colPadding'
                md={{
                size: 10,
                offset: 2
              }}
                sm={{
                size: 9,
                offset: 3
              }}>
                <span className='errorTip'>{this.state.errors['date']}</span>
              </Col>
            </FormGroup>

            <FormGroup row className='my-0'>
              <Label for='note' className='inputLabel noteLabel' md={2} sm={3}>備註事項 :</Label>
              <Col className='colPadding' md={10} sm={9}>
                <Input
                  id='note'
                  className='inputContent noteInput'
                  type='textarea'
                  onChange={this.handleChange}
                  value={this.state.fields.note}/>
              </Col>
            </FormGroup>
          </div>

          <div className='formContent'>
            <div className='contentTitle'>付款方式</div>
            <div className='titleBackground'></div>

            <FormGroup row className='my-0'>
              <Label
                className='payName'
                check
                sm={{
                size: 10,
                offset: 2
              }}>
                <Input
                  className='pay'
                  type='radio'
                  name='pay'
                  value='信用卡'
                  onChange={this.payChange}
                  checked={this.state.fields.pay === '信用卡'}/>
                信用卡</Label>
              <Label
                className='payName'
                check
                sm={{
                size: 10,
                offset: 2
              }}>
                <Input
                  className='pay'
                  type='radio'
                  name='pay'
                  value='ATM轉帳'
                  onChange={this.payChange}
                  checked={this.state.fields.pay === 'ATM轉帳'}/>
                ATM轉帳</Label>
              <Label
                className='payName'
                check
                sm={{
                size: 10,
                offset: 2
              }}>
                <Input
                  className='pay'
                  type='radio'
                  name='pay'
                  value='貨到付款'
                  onChange={this.payChange}
                  checked={this.state.fields.pay === '貨到付款'}/>
                貨到付款</Label>
            </FormGroup>

          </div>
          <FormGroup row>
            <Col 
            lg={{
              size: 3,
              offset: 9
            }}
            md={{
              size: 5,
              offset: 7
            }}>
              <Button className='btnNext' color='danger' onClick={this.save}>下一步</Button>
            </Col>
          </FormGroup>
        </Form>
      </React.Fragment>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    fetch('http://localhost:3000/session/info', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      })
      .then(res => res.json())
      .then(session => {
        let fields = this.state.fields;
        fields['name'] = session.name;
        fields['mobile'] = session.mobile;
        fields['member_sid'] = session.sid;
        fields['zipCode'] = session.zipCode;
        fields['county'] = session.county;
        fields['address'] = session.address;
        fields['district'] = session.district;
        this.setState({fields});
      })
  }
  componentDidUpdate() {
    console.log('update')
  }
}
export default OrderStep1;

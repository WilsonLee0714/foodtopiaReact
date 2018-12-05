import React, {Component} from 'react';
import "./Order.scss";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
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
import {ZipCodeTW} from "zipcode-tw-react";

class OrderStep1 extends Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      fields: {
        member_sid: "",
        name: "",
        tel: "",
        mobile: "",
        ship: "宅配到府",
        county: "",
        district: "",
        zipCode:'',
        address: "",
        date: "",
        time: "",
        note: "",
        pay: "信用卡"
      },
      errors: {}
    };
    console.log(this.state)
  }

  handleZipCodeChange = (e) =>{
    const {countyValue,districtValue,zipValue} = e;
    let fields = this.state.fields;
    fields["zipCode"]=zipValue
    fields["county"]=countyValue
    fields["district"]=districtValue
    this.setState({ fields });
  }
  handleChange = (evt) => {
    let key = evt.target.id;
    let data = evt.target.value;
    let fields = this.state.fields;
    fields[key] = data;
    this.setState({ fields });
    console.log(this.state);
  }
  shipChange = (evt) => {
    let choose = evt.target.value;
    let fields = this.state.fields;
    fields["ship"] = choose;
    this.setState({ fields });
  }
  dateChange = (date) => {
    let fields = this.state.fields;
    fields["date"] = date;
    this.setState({ fields });

  }
  timeChange = (time) => {
    let fields = this.state.fields;
    fields["time"] = time;
    this.setState({ fields });
  }
  payChange = (evt) => {
    let choose = evt.target.value;
    let fields = this.state.fields;
    fields["pay"] = choose;
    this.setState({ fields });
  }

  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "姓名為必填欄位";
    }

    //Tel
    if (fields["tel"] !== "") {
      if (!fields["tel"].match(/^(0\d{8,10})(?:(?:#)(\d+))?$/)) {
        formIsValid = false;
        errors["tel"] = "請輸入正確格式，例 0223456789#123";
      }
    }

    //mobile
    if (!fields["mobile"]) {
      formIsValid = false;
      errors["mobile"] = "手機為必填欄位";
    } else if (typeof fields["mobile"] !== "undefined") {
      if (!fields["mobile"].match(/^09\d{8}/)) {
        formIsValid = false;
        errors["mobile"] = "請輸入正確格式，例 0912345678";
      }
    }

    //Address
    if (!fields["county"]) {
      formIsValid = false;
      errors["address"] = "地址為必填欄位";
    } else if (!fields["district"]) {
      formIsValid = false;
      errors["address"] = "地址為必填欄位";
    } else if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "地址為必填欄位";
    }

    //Date
    if (!fields["date"]) {
      formIsValid = false;
      errors["date"] = "送達時間為必選欄位";
    } else if (!fields["time"]) {
      formIsValid = false;
      errors["date"] = "送達時間為必選欄位";
    }

    this.setState({ errors: errors });
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
      // this.props.history.push('/order/step2');
      // window.location.assign('/order/step2');
    } else {
      return
    }

  }

  render() {

    const minHours = () => {
      var today
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
              <Label for='name' className='inputLabel' sm={2}>*姓名 :</Label>
              <Col className='colPadding' sm={10}>
                <Input
                  id='name'
                  className='inputContent'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.fields.name} />
              </Col>
              <Col
                className='colPadding'
                sm={{
                  size: 10,
                  offset: 2
                }}>
                <span className='errorTip'>{this.state.errors["name"]}</span>
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
                  value={this.state.fields.tel} />
              </Col>
              <Col
                className='colPadding'
                sm={{
                  size: 10,
                  offset: 2
                }}>
                <span className='errorTip'>{this.state.errors["tel"]}</span>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for='mobile' className='inputLabel' sm={2}>*手機 :</Label>
              <Col className='colPadding' sm={10}>
                <Input
                  id='mobile'
                  className='inputContent'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.fields.mobile} />
              </Col>
              <Col
                className='colPadding'
                sm={{
                  size: 10,
                  offset: 2
                }}>
                <span className='errorTip'>{this.state.errors["mobile"]}</span>
              </Col>
            </FormGroup>

            {/* <FormGroup className='my-selector-c addressSelect' row>
              <Label for='county' className='inputLabel' sm={2}>*地址 :</Label>
              <Input
                id='county'
                className='county'
                type='select'
                onChange={this.handleChange}
                value={this.state.fields.county} />
              <Input
                id='district'
                className='district'
                type='select'
                onChange={this.handleChange}
                value={this.state.fields.district} />
              <Input
                id='address'
                className='inputContent'
                type='text'
                onChange={this.handleChange}
                value={this.state.fields.address} />
              <Col
                className='colPadding'
                sm={{
                  size: 10,
                  offset: 2
                }}>
                <span className='errorTip'>{this.state.errors["address"]}</span>
              </Col>
            </FormGroup> */}
            <FormGroup className='addressSelect' row>
            <Label for='county' className='inputLabel' sm={2}>*地址 :</Label>
            <ZipCodeTW displayType='text'
                       countyValue={this.state.fields.county}
                       districtValue={this.state.fields.district}
                       zipCodeValue={this.state.fields.zipCode}
                       countyStyle={{
                         width: '100px', 
                         display: 'inline'
                        }}
                       districtStyle={{
                         width: '100px',
                         display: 'inline'
                       }}
                       zipStyle={{
                        width: '70px',
                         display: 'inline'
                       }}
                       zipCodePositionLast={false}
                       handleChangeCounty={this.handleZipCodeChange}
                       handleChangeDistrict={this.handleZipCodeChange}
                       handleChangeZipCode={this.handleZipCodeChange}
                       handleBlurZipCode={this.handleZipCodeChange}
                       handleZipCodeNotExists={this.handleZipCodeChange} />
            <Input
                id='address'
                className='inputContent'
                type='text'
                onChange={this.handleChange}
                value={this.state.fields.address} />
              <Col
                className='colPadding'
                sm={{
                  size: 10,
                  offset: 2
                }}>
                <span className='errorTip'>{this.state.errors["address"]}</span>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label className='inputLabel' sm={2}>*寄送方式 :</Label>
              <Label className='' check sm={10}>
                <Input
                  id="home"
                  className='ship'
                  type="radio"
                  name="ship"
                  value="宅配到府"
                  onChange={this.shipChange}
                  checked={this.state.fields.ship === '宅配到府'} />
                宅配到府</Label>
            </FormGroup>

            <FormGroup className='' row>
              <Label for="shipTime" className='inputLabel' sm={2}>*送達時間 :</Label>
              <Col className='colPadding' sm={10}>
                <DatePicker
                  className="timeSelect"
                  selected={this.state.fields.date}
                  onChange={this.dateChange}
                  dateFormat="yyyy/MM/dd"
                  minDate={getHours(new Date()) > 17
                    ? addDays(new Date(), 1)
                    : new Date()}
                  maxDate={addDays(new Date(), 7)}
                  placeholderText="選擇日期" />
                <DatePicker
                  className="timeSelect"
                  selected={this.state.fields.time}
                  onChange={this.timeChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  minTime={minHours()}
                  maxTime={setHours(setMinutes(new Date(), 0), 20)}
                  dateFormat="h:mm aa"
                  timeCaption="時間"
                  placeholderText="選擇時間" />
              </Col>
              <Col
                className='colPadding'
                sm={{
                  size: 10,
                  offset: 2
                }}>
                <span className='errorTip'>{this.state.errors["date"]}</span>
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
                  value={this.state.fields.note} />
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
                  type="radio"
                  name="pay"
                  value="信用卡"
                  onChange={this.payChange}
                  checked={this.state.fields.pay === '信用卡'} />
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
                  type="radio"
                  name="pay"
                  value="ATM轉帳"
                  onChange={this.payChange}
                  checked={this.state.fields.pay === 'ATM轉帳'} />
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
                  type="radio"
                  name="pay"
                  value="貨到付款"
                  onChange={this.payChange}
                  checked={this.state.fields.pay === '貨到付款'} />
                貨到付款</Label>
            </FormGroup>

          </div>
          <FormGroup row>
            <Col sm={{
              size: 3,
              offset: 9
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
      credentials: 'include'
    }).then(function (res) {
      console.log(res);
      return res.json();
    }).then((session) => {
      console.log(session.zipCode)
      console.log(session.county)
      console.log(session.district)
      console.log(session.address)
      console.log(session.nickname)
      console.log(session.name)
      let fields = this.state.fields;
      fields["name"] = session.name;
      fields["mobile"] = session.mobile;
      fields["member_sid"] = session.sid;
      fields["zipCode"] = session.zipCode;
      fields["county"] = session.county;
      fields["address"] = session.address;
      fields["district"] = session.district;
      this.setState({ fields });
      
    })
      .catch(function (err) {
        console.log(err);
      })
    
    console.log(this.state)
  }
  componentDidUpdate() { }
}
export default OrderStep1;

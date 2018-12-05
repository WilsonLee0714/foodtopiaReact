import React, {Component} from 'react';
import './BasicInfo.scss';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import {
  Form,
  FormGroup,
  Row,
  Col,
  Label,
  Input,
  Button
} from 'reactstrap';
import {ZipCodeTW} from "zipcode-tw-react";

class BasicInfo extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      nickname: '',
      name: '',
      email: '',
      sid: '',
      mobile: '',
      county: '',
      zipCode:'',
      district: '',
      address: '',
      password: '',
      profile: '',
      display: 'd-none'
    }
    console.log(this);
  }
  componentDidMount = () => {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var nickname = document.getElementById('nickname');
    fetch('http://localhost:3000/session/info', {
        method: 'GET',
        credentials: 'include'
      }).then(function (res) {
      console.log(res);
      return res.json();
    }).then((a) => {
      this.setState({
        nickname: a.nickname,
        sid: a.sid,
        email: a.email,
        name: a.name,
        password: a.password,
        profile: a.profile,
        mobile: a.mobile,
        zipCode: a.zipCode,
        county: a.county,
        district: a.district,
        address: a.address
      });
      console.log(a.profile)
      console.log(a.nickname)
      console.log(a.name)
    })
      .catch(function (err) {
        console.log(err);
        //alert(err);
      })
  }

  handleChange = (evt) => {
    let key = evt.target.id;
    let data = evt.target.value;
    this.setState({[key]: data});
    console.log(this.state);
  }
  handleChangeNotNull = (evt) => {
    let key = evt.target.id;
    let data = evt.target.value;
    if (key == 'nickname' && data == 0) {
      alert('暱稱不能空值');
      return false;
    }
    if (key == 'password' && data == 0) {
      alert('密碼不能空值');
      return false;
    }
    this.setState({[key]: data});
  }

  // handleClick = (event) => {     // alert(this.state.nickname);
  // event.preventDefault();     fetch('http://localhost:3000/session/info', {
  // method: 'PUT',         // credentials: 'include',         headers: {
  // 'Content-Type': 'application/json'         },         body: JSON.stringify({
  //          nick_name: this.state.nickname,             sid: this.state.sid  })
  //    }); }
  handleClick = (e) => {
    //   var rPw = document.getElementById('rPw');
    this.setState({display: ''});
    e.target.style.display = 'none';
    //   rPw.style.display = 'block !important';
  }
  // handleClick2 = (e) => {   e.preventDefault();   var infoForm
  // =document.getElementById('infoForm');   var infoForm2
  // =document.getElementById('infoForm2');   infoForm2.submit() infoForm.submit()
  // }

  handleZipCodeChange = (e) => {
    const {countyValue, districtValue, zipValue} = e;
    this.setState({zipCode: zipValue, county: countyValue, district: districtValue});
  }

  render() {
    return (
      <React.Fragment>
        <div className='basicWrap'>
          <div className='infoWrap mt-3 mx-5 p-3 '>
            <h4 className='infoTitle p-3 text-dark'>基本資料</h4>
            <img src={require('./images/photo1.jpg')}/>
            <Form
              action='http://localhost:3000/session/info'
              method='post'
              style={{
              borderRadius: '5px',
              height:'85%',
              background: 'rgba(0,0,0,.5)',
            }}>
              <Row className='' style={{height:'80%'}}>
                <Col
                  sm={6}
                  className='p-5'
                  style={{
                  borderRight: '3px dashed #707070'
                }}>
                  <h4 className='sideTitle'>基本資料</h4>
                  <Input name='sid' value={this.state.sid} className='d-none'/> {/* sid用來給後端的 不要刪掉 */}
                  <FormGroup row>
                    <Label className='leftLabel' sm={3}>信箱 :</Label>
                    <Col className='colPadding emailText' style={{letterSpacing:'3px'}} sm={9}>
                      {this.state.email}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label className='leftLabel' sm={3}>暱稱 :</Label>
                    <Col className='colPadding' sm={9}>
                      <Input
                        id='nickname'
                        className='leftInput'
                        type='text'
                        name='nick_name'
                        onChange={this.handleChangeNotNull}
                        value={this.state.nickname}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label className='leftLabel' sm={3}>密碼 :</Label>
                    <Col className='colPadding' sm={9}>
                      <Input
                        id='password'
                        className={this.state.display + ' leftInput'}
                        type='password'
                        name='password'
                        onChange={this.handleChangeNotNull}
                        value={this.state.password}/>
                      <Button
                        type='button'
                        color='danger'
                        className='btnPassword'
                        id='rBtn'
                        onClick={this.handleClick}
                        style={{
                        borderRadius: '5px w-100'
                      }}>修改密碼</Button>
                    </Col>
                  </FormGroup>

                </Col>
                <Col className='py-5 pl-2' sm={6} style={{flex:'2'}}>
                  <h4 className='sideTitle'>收件資訊</h4>
                  <FormGroup row>
                    <Label className='rightLabel' sm={3}>姓名 :</Label>
                    <Col className='colPadding' sm={9}>
                      <Input
                        id='name'
                        className='rightInput'
                        type='text'
                        name='name'
                        onChange={this.handleChange}
                        value={this.state.name}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label className='rightLabel' sm={3}>手機 :</Label>
                    <Col className='colPadding' sm={9}>
                      <Input
                        id='mobile'
                        className='rightInput'
                        type='text'
                        name='mobile'
                        onChange={this.handleChange}
                        value={this.state.mobile}/>
                    </Col>
                  </FormGroup>

                      <FormGroup className='' row>
                    <Label className='addressLabel' sm={3}>地址 :</Label>
                        <Col className='colPadding' sm={9}>
                        <Col sm={12} style={{}} className='colPadding addressSelect d-flex'>
                          <ZipCodeTW
                            displayType='text'
                            countyValue={this.state.county}
                            districtValue={this.state.district}
                            zipCodeValue={this.state.zipCode}
                            countyStyle={{
                            width: '95px',fontSize:'12px'
                          }}
                            districtStyle={{
                            width: '95px',fontSize:'12px'
                          }}
                            zipStyle={{
                            width: '50px',fontSize:'12px',
                            padding:0
                          }}
                            handleChangeCounty={this.handleZipCodeChange}
                            handleChangeDistrict={this.handleZipCodeChange}
                            handleChangeZipCode={this.handleZipCodeChange}
                            handleBlurZipCode={this.handleZipCodeChange}
                            handleZipCodeNotExists={this.handleZipCodeChange}/>
                            </Col>
                        <Col sm={12} className='colPadding'>
                          <Input
                            id='address'
                            name='address'
                            className='addressInput'
                            type='text'
                            onChange={this.handleChange}
                            value={this.state.address}/>
                        </Col>
                        </Col>
                      </FormGroup>
                </Col>
              </Row>
              <Row
                className='align-items-center justify-content-center m-auto'
                style={{
                borderTop: '3px dashed #707070',height:'20%',width:'100%'
              }}>
                <Button color='danger' type='submit' className='btnSave'>儲存變更</Button>
              </Row>
            </Form>

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BasicInfo;
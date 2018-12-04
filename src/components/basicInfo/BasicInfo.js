import React, { Component } from 'react';
import './BasicInfo.scss';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class BasicInfo extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      nickname: '',
      name: '',
      email: '',
      sid: '',
      mobile: '',
      address: '',
      password: '',
      profile: '',
      display: 'd-none',
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
      this.setState({ nickname: a.nickname });
      this.setState({ sid: a.sid });
      this.setState({ email: a.email });
      this.setState({ name: a.name });
      this.setState({ password: a.password });
      this.setState({ profile: a.profile });
      this.setState({ mobile: a.mobile });
      this.setState({ address: a.address });
      console.log(a.profile)
      console.log(a.nickname)
      console.log(a.name)
    })
      .catch(function (err) {
        console.log(err);
        //alert(err);
      })
  }

  handleChange = (event) => {
    if(event.target.value==0) {
      alert('暱稱不能空值');
      return false;
    }
    this.setState({ nickname: event.target.value });
  }
  handleChange2 = (event) => {
    if(event.target.value==0) {
      alert('密碼不能空值');
      return false;
    }
    this.setState({ password: event.target.value });
  }
  handleChange3 = (event) => {
    this.setState({ name: event.target.value });
  }
  handleChange4 = (event) => {
    this.setState({ mobile: event.target.value });
  }
  handleChange5 = (event) => {
    this.setState({ address: event.target.value });
  }
  // handleClick = (event) => {     // alert(this.state.nickname);
  // event.preventDefault();     fetch('http://localhost:3000/session/info', {
  // method: 'PUT',         // credentials: 'include',         headers: {
  // 'Content-Type': 'application/json'         },         body: JSON.stringify({
  //            nick_name: this.state.nickname,             sid: this.state.sid
  //      })     }); }
  handleClick = (e) => {
    //   var rPw = document.getElementById('rPw');
    this.setState({ display: '' });
    e.target.style.display = 'none';
    //   rPw.style.display = 'block !important';
  }
  // handleClick2 = (e) => {
  //   e.preventDefault();
  //   var infoForm =document.getElementById('infoForm');
  //   var infoForm2 =document.getElementById('infoForm2');
  //   infoForm2.submit()
  //   infoForm.submit()
  // }


  render() {
    return (
      <React.Fragment>
        <div className='basicWrap'>
          <div className='infoWrap mt-3 mx-5 p-3 '>
            <h4 className='infoTitle p-3 text-dark'>基本資料</h4>
            <img src={require('./images/photo1.jpg')} />
            <form action='http://localhost:3000/session/info' method='post' style={{borderRadius:'5px',width:'100%',height:'85%',background:'rgba(0,0,0,.5)'}}>
              <div className='d-flex' style={{height:'80%'}}>
                <div className='p-5 flex-column' style={{flex:'1',borderRight:'2px dashed #707070'}}>
                  <h4 className='text-center'>基本資料</h4>
                  <input name='sid' value={this.state.sid} className='d-none' />
                    {/* sid用來給後端的 不要刪掉 */}
                    <table className=''>
                      <tr>
                        <td className=''><span className='text-danger text-center w-100'></span>信箱 : </td>
                        <td className='text-center'>
                          <span className='ml-2' style={{letterSpacing:'2px'}}>
                            {this.state.email}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          暱稱 : </td>
                        <td>
                          <input
                            id='nickname'
                            name='nick_name'
                            value={this.state.nickname}
                            onChange={this.handleChange}
                            className='pl-2 ml-2'
                            size='20'
                            type='text' maxLength='5'></input>
                        </td>
                      </tr>

                      <tr>
                        <td>密碼 : </td>
                        <td>
                          <input name='password' size='20' type='password' id='rPw' onChange={this.handleChange2} value={this.state.password} className={this.state.display+' pl-2 ml-2'}>
                          </input><button type='button' className='pl-2 ml-2 w-100' id='rBtn' onClick={this.handleClick} style={{ borderRadius: '5px' }}>修改密碼</button></td>
                      </tr>
                    </table>
                </div>
                <div className='p-5' style={{flex:'1'}}>
                  <h4 className='text-center'>收件資訊</h4>
                  <table className=''>

                      <tr>
                        <td>
                          姓名 : </td>
                        <td>
                          <input
                            id='name'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange3}
                            className='pl-2 ml-2'
                            size='20'
                            type='text' maxlength="4"></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          手機 : </td>
                        <td>
                          <input
                            id='mobile'
                            name='mobile'
                            value={this.state.mobile}
                            onChange={this.handleChange4}
                            className='pl-2 ml-2'
                            size='20'
                            type='text' maxlength="10"></input>
                        </td>
                      </tr>

                      <tr>
                        <td>地址 : </td>
                        <td>
                          <input name='address' maxlength="100" className='pl-2 ml-2' size='20' type='text' onChange={this.handleChange5} value={this.state.address}>
                          </input></td>
                      </tr>
                    </table>
                </div>
              </div>
              <div className='text-center d-flex align-items-center justify-content-center' style={{height:'20%',borderTop:'3px dashed #707070'}}> <button
                        type='submit'
                        // onClick={this.handleClick2}
                        className='btn btn-danger w-50'>儲存變更</button></div>
            </form>

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BasicInfo;
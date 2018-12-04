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

    // 3d
    var i = 0
    var ii = -100
    // window.addEventListener('keydown', function (event) {
    //   console.log(event.keyCode)
    //   switch (event.keyCode) {
    //     case 37:
    //       console.log('left')
    //       i += 90
    //       $('.wrap91').css('transform', `translateZ(${ii}px) rotateY(${i}deg)`)
    //       $('.controlLeft').css('transform', 'scale(1.2,1.2)')
    //       setTimeout(function () {
    //         $('.controlLeft').css('transform', 'scale(1,1)')
    //       }, 100)
    //       break;
    //     case 39:
    //       console.log('right')
    //       i -= 90
    //       $('.wrap91').css('transform', `translateZ(${ii}px) rotateY(${i}deg)`)
    //       $('.controlRight').css('transform', 'scale(1.2,1.2)')
    //       setTimeout(function () {
    //         $('.controlRight').css('transform', 'scale(1,1)')
    //       }, 100)
    //       break;
    //     case 32:
    //       $('.box91').toggleClass('opacity1')
    //       break;
    //     case 38:
    //       ii -= 90
    //       $('.wrap91').css('transform', `translateZ(${ii}px)`)
    //       break;
    //     case 40:
    //       if (ii >= 0) return false
    //       ii += 90
    //       $('.wrap91').css('transform', `translateZ(${ii}px)`)
    //       break;
    //   }
    // })
    $('.controlLeft').click(function () {
      i += 90
      $('.wrap91').css('transform', `translateZ(-100px) rotateX(0deg) rotateY(${i}deg)`)
    })
    $('.controlRight').click(function () {
      i -= 90
      $('.wrap91').css('transform', `translateZ(-100px) rotateX(0deg) rotateY(${i}deg)`)
    })
    // 3d
  }

  handleChange = (event) => {
    this.setState({ nickname: event.target.value });
  }
  handleChange2 = (event) => {
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
    this.setState({ display: '' })
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
            {/* 3d */}
            <div class="bodyWrap pt-4">
              <div class="wrap91">

                <div class="box91 front91">
                  {/* form */}
                  <form id='infoForm' className='infoForm' action='http://localhost:3000/session/info' method='post'>
                    <h3 className='p-0 m-0'>基本資料</h3>
                    <input name='sid' value={this.state.sid} className='d-none' />
                    {/* sid用來給後端的 不要刪掉 */}
                    <table className=''>
                      <tr>
                        <td className='text-center'><span className='text-danger text-center w-100'></span>信箱 : </td>
                        <td>
                          <span>
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
                            className='text-center'
                            size='10'
                            type='text'></input>
                        </td>
                      </tr>

                      <tr>
                        <td>密碼 : </td>
                        <td>
                          <input name='password' size='10' type='password' id='rPw' onChange={this.handleChange2} value={this.state.password} className={this.state.display}>
                          </input><button type='button' id='rBtn' onClick={this.handleClick} style={{ borderRadius: '5px' }}>修改密碼</button></td>
                      </tr>
                    </table>
                    <div className='text-center mt-1 w-100'>
                      <button
                        type='submit'
                        // onClick={this.handleClick2}
                        className='btn btn-success w-50'>儲存變更</button>
                    </div>
                  </form>
                  {/* form */}
                </div>
                {/* <div class="box91 back91"></div>
                <div class="box91 left91"></div> */}
                <div class="box91 right91">
                  {/* form */}
                  <form id='infoForm2' className='infoForm text-left' action='http://localhost:3000/session/info' method='post'>
                    <h3 className='p-0 m-0'>收件資訊</h3>
                    <input name='sid' value={this.state.sid} className='d-none' />
                    {/* sid用來給後端的 不要刪掉 */}
                    <table className=''>

                      <tr>
                        <td>
                          真實姓名 : </td>
                        <td>
                          <input
                            id='name'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange3}
                            className='text-center'
                            size='10'
                            type='text'></input>
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
                            className='text-center'
                            size='10'
                            type='text'></input>
                        </td>
                      </tr>

                      <tr>
                        <td>地址 : </td>
                        <td>
                          <input name='address' size='20' type='text' onChange={this.handleChange5} value={this.state.address}>
                          </input></td>
                      </tr>
                    </table>
                    <div className='text-center mt-1 w-100'>
                      <button
                        type='submit'
                        // onClick={this.handleClick2}
                        className='btn btn-danger w-50'>儲存變更</button>
                    </div>
                  </form>
                  {/* form */}
                </div>
              </div>
              <div class="container d-flex justify-content-around mt-3">
                <div class="controlLeft">←</div>
                <div class="controlRight ">→</div>
              </div>
            </div>
            {/* 3d */}

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BasicInfo;
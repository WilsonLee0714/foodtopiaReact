import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Register.scss";


class Register extends Component {
    constructor(props) {
        super(props);
    }
    checkOut(e) {
        e.preventDefault();
        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            } else {
                return true;
            }
        }
        var nickName = document.getElementById('nickName');
        var email = document.getElementById('email');
        var pw1 = document.getElementById('pw1');
        var pw2 = document.getElementById('pw2');
        var registerFrom = document.getElementById('registerFrom');
        if (nickName.value == '' || email.value == '' || pw1.value == '' || pw2.value == '') {
            alert('請確認欄位是否都有填寫')
            nickName.value = '';
            email.value = '';
            pw1.value = '';
            pw2.value = '';
        } else if (pw1.value != pw2.value) {
            alert('密碼輸入不一致')
            nickName.value = '';
            email.value = '';
            pw1.value = '';
            pw2.value = '';
        } else if (!IsEmail(email.value)) {
            alert('信箱格式不正確')
            console.log(IsEmail(email.value))
        } else {
            console.log(IsEmail(email.value))
            registerFrom.submit();
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className='wrapRe'>
                    <img className='tree' src={require('./images/table2.jpg')} />
                    <div className='container'>
                        <div className='d-flex justify-content-center align-items-center mt-3 mb-5 register flex-md-row flex-column-reverse'>
                            <div className='d-flex fadeInLeft'>
                                <img className='' src={require('./images/steakPlated.png')} />
                            </div>
                            <div class="formPattern fadeInRight" style={{ width: '300px' }}>
                                <form id='registerFrom' action='http://localhost:3000/api/members' method='post'>
                                <h3 className='pb-4 text-center'>會員註冊</h3>
                                    <div class="form-group d-flex justify-content-between py-1">
                                        <label>暱稱</label>
                                        <input id='nickName' name='nick_name' type="text" class="form-control w-75" aria-describedby="emailHelp" placeholder="請輸入暱稱" />
                                    </div>
                                    <div class="form-group d-flex justify-content-between py-1">
                                        <label>Email</label>
                                        <input id='email' name='email' type="email" class="form-control w-75" aria-describedby="emailHelp" placeholder="請輸入信箱" />
                                    </div>
                                    <div class="form-group d-flex justify-content-between py-1">
                                        <label>密碼</label>
                                        <input id='pw1' name='password' type="password" class="form-control w-75" aria-describedby="emailHelp" placeholder="請輸入密碼" />
                                    </div>
                                    <div class="form-group d-flex justify-content-between py-1">
                                        <label>密碼確認</label>
                                        <input id='pw2' type="password" class="form-control w-75" placeholder="請確認密碼" />
                                    </div>
                                    {/* <Link to='/registerSuccessful'> */}
                                    <button id='registerBtn' onClick={this.checkOut} type="submit" class="btn btn-sm btn-primary w-100 py-2 btn1">註冊</button>
                                    {/* </Link> */}
                                    <small className="text-center">繼續進行代表你同意<span className="text-primary">服務條款</span></small>
                                    <hr />
                                    <Link to='/login'><button type="submit" class="btn btn-sm btn-primary py-2 w-100">登入</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
}

export default Register;

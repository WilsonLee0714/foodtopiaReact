import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Login.scss";


class Login extends Component {
    constructor(props) {
        super(props);
    }
    checkOut(e){
        let email = document.getElementById('email');
        let pw1 = document.getElementById('pw1');
        if(email.value == '' || pw1.value ==''){
            alert('信箱或密碼不正確')
        } 
    }
    render() {
        return (
            <React.Fragment>
                
                <div className='container'>
                    <div className='d-flex justify-content-center align-items-center mt-3 mb-5 login flex-md-row flex-column-reverse'>
                        {/* <div className='d-flex fadeInLeft'>
                            <img className='' src={require('./images/steakPlated.png')} />
                        </div> */}
                        <div class="formPattern fadeIn" style={{ width: '300px' }}>
                            <form id='registerFrom' action='http://localhost:3000/users/login' method='post'>
                            <h3 className='pb-4 text-center'>會員登入</h3>
                                <div class="form-group d-flex justify-content-between py-1">
                                    <label>Email</label>
                                    <input id='email' name='email' type="email" class="form-control w-75"  aria-describedby="emailHelp" placeholder="請輸入信箱" />
                                </div>
                                <div class="form-group d-flex justify-content-between py-1">
                                    <label>密碼</label>
                                    <input id='pw1' name='password' type="password" class="form-control w-75"  aria-describedby="emailHelp" placeholder="請輸入密碼" />
                                </div>
                                {/* <Link to='/registerSuccessful'> */}
                                <button id='registerBtn' onClick={this.checkOut} type="submit" class="btn btn-primary w-100 py-2 btn1 btn-sm">登入</button>
                                {/* </Link> */}
                                <small className="text-center"><span className="text-primary">忘記密碼</span></small>
                                <hr />
                                <Link to='/register'><button type="submit" class="btn btn-primary btn-sm py-2 w-100">註冊</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    componentDidMount() {
       
    }
}

export default Login;

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Register.scss";


class Register extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                
                <div className='container'>
                    <div className='d-flex justify-content-center align-items-center my-5 register flex-md-row flex-column-reverse'>
                        <div className='d-flex rotateIn'>
                            <img className='' src={require('./images/steakPlated.png')} />
                        </div>
                        <div class="formPattern" style={{ width: '300px' }}>
                            <h3 className='pb-4 text-center'>註冊會員</h3>
                            <form>
                                <div class="form-group d-flex justify-content-between py-1">
                                    <label>暱稱</label>
                                    <input type="email" class="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="請輸入暱稱" />
                                </div>
                                <div class="form-group d-flex justify-content-between py-1">
                                    <label>Email</label>
                                    <input type="email" class="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="請輸入信箱" />
                                </div>
                                <div class="form-group d-flex justify-content-between py-1">
                                    <label>密碼</label>
                                    <input type="email" class="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="請輸入密碼" />
                                </div>
                                <div class="form-group d-flex justify-content-between py-1">
                                    <label>密碼確認</label>
                                    <input type="password" class="form-control w-75" id="exampleInputPassword1" placeholder="請確認密碼" />
                                </div>
                                <Link to='/registerSuccessful'><button type="submit" class="btn btn-primary w-100 py-2 btn1">註冊</button></Link>
                                <small className="text-center">繼續進行代表你同意<span className="text-primary">服務條款</span></small>
                                <hr />
                                <Link to='/memberCenter'><button type="submit" class="btn btn-primary py-2 w-100">登入</button></Link>
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

export default Register;

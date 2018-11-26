import React, { Component } from 'react';
import './BasicInfo.scss';
import { Link } from 'react-router-dom';

class BasicInfo extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            nickname: '',
            name: '',
            email: '',
            sid: '',
        }
    }
    componentDidMount = () => {
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var nickname = document.getElementById('nickname');
        fetch('http://localhost:3000/session/info', {
            method: 'GET',
            credentials: 'include',
        }).then(function (res) {
            console.log(res);
            return res.json();
        }).then((a) => {
            this.setState({ nickname: a.nickname });
            this.setState({ sid: a.sid });
            this.setState({ email: a.email });
            this.setState({ name: a.name });
        }).catch(function (err) {
            console.log(err);
            //alert(err);
        })
    }

    handleChange = (event) => {
        this.setState({ nickname: event.target.value });
    }
    // handleClick = (event) => {
    //     // alert(this.state.nickname);
    //     event.preventDefault();
    //     fetch('http://localhost:3000/session/info', {
    //         method: 'PUT',
    //         // credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             nick_name: this.state.nickname,
    //             sid: this.state.sid
    //         })
    //     });
    // }
    render() {
        return (
            <React.Fragment>
                <div className='basicWrap' >
                    <div className='profileImg mx-auto my-3'>
                        <img src={require('./images/profile.png')} />
                    </div>
                    <div className='text-center'>
                        {/* <label className='mr-3'>上傳大頭貼</label> */}
                        <input style={{border:'none'}} className='text-center w-25' type='file'/>
                    </div>
                    <div className='infoWrap m-5 p-3'>
                        <form action='http://localhost:3000/session/info' method='post'>
                            <h4 className='infoTitle p-3'>基本資料</h4>
                            <table className=''>
                                <tr>
                                    <td><span className='text-danger'>*</span>顯示暱稱</td>
                                    <td><input id='nickname' name='nick_name' value={this.state.nickname} onChange={this.handleChange} className='' size='50' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td >帳號</td>
                                    <td><input className='' size='50' type='text'></input></td>
                                    <td><input style={{display:'none'}} name='sid' value={this.state.sid} className='' size='50' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>密碼</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>真實姓名</td>
                                    <td><input id='name' className='' size='50' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><input id='email' name='email' value={this.state.email} className='' size='50' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>性別</td>
                                    <td>
                                        <select>
                                            <option></option>
                                            <option>男生</option>
                                            <option>女生</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>生日</td>
                                    <td>
                                        <input type='date'></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>手機</td>
                                    <td><input className='' size='50' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>郵遞區號</td>
                                    <td><input className='' size='70' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>郵件地址</td>
                                    <td><input className='' size='70' type='text'></input></td>
                                </tr>
                                <tr>
                                    <td>個人簡介 </td>
                                    <td><textarea cols="70" rows="5"></textarea></td>
                                </tr>
                                <tr>
                                    <td>部落格網址</td>
                                    <td><input className='' size='70' type='text'></input></td>
                                </tr>
                            </table>
                            <div className='text-center my-3'>
                                <button type='submit' onClick={this.handleClick} className='btn btn-success w-25'>儲存變更</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BasicInfo;
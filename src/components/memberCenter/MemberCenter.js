import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MemberCenter.scss';

class MemberCenter extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            userName: '',
            profile: 'Group158.png',
            source: 'http://localhost:3000/uploads/',
        }
    }
    componentDidMount = () => {
        var userName = document.getElementById('userName');
        fetch('http://localhost:3000/session/info', {
            method: 'GET',
            credentials: 'include'
        }).then(function (res) {
            console.log(res);
            return res.json();
        }).then((a) => {
            this.setState({ userName: a.nickname });
            if(a.profile!=''){
                this.setState({ profile: a.profile });
            } else {
                this.setState({ profile: 'Group158.png' });
            }
        })
            .catch(function (err) {
                console.log(err);
                //alert(err);
            })
    }
    clickHandler() {
        // this.classList.remove("active");
    }
    logout() {
        fetch('http://localhost:3000/session/logout', {
            method: 'GET',
        })
    }
    handleChange = (e) => {
        var uploadForm = document.getElementById('uploadForm');
        uploadForm.submit();
    }
    render() {
        return (
            <React.Fragment>
               
                {/* <div className='mt-3 p-4' style={{ width: '250px' }}></div> */}
                <div className='centerWrap mt-3 mb-3 d-flex flex-column p-4 '>
                    <div className='text-center'>
                        <form id='uploadForm' enctype="multipart/form-data" action='http://localhost:3000/upload' method='post'>
                            <input name='file' onChange={this.handleChange} type='file' style={{ position: 'absolute', height: '60px',transform:'transLateX(-100px)', width: '200px', opacity: '0',cursor:'pointer' }}></input>
                        </form>
                        <img className='my-2 mr-2' style={{ width: '60px',height:'60px',borderRadius:'50%' }} src={this.state.source+this.state.profile}/>
                        <span id='userName' className='text-primary' style={{ fontWeight: '600' }}>{this.state.userName}</span>
                    </div>
                    <div>
                        <h3 className='py-3 rubberBand' style={{fontWeight:'600'}}>帳號管理</h3>
                        <div className='bb'></div>
                    </div>
                    <div>
                        <ul>
                            <li><Link className='a' style={{ fontWeight: '600' }} to='/memberCenter/basicInfo'>基本資料</Link></li>
                            <li><Link className='a' style={{ fontWeight: '600' }} to='/memberCenter/subscription'>訂閱通知</Link></li>
                            <li><Link className='a' style={{ fontWeight: '600' }} to='/memberCenter/favorite'>收藏清單</Link></li>
                            <li><Link className='a' style={{ fontWeight: '600' }} to='/memberCenter/myOrder'>我的訂單</Link></li>
                            <li><Link className='a' style={{ fontWeight: '600' }} to='/memberCenter/myService'>客服系統</Link></li>
                            <li><Link className='a' style={{ fontWeight: '600' }} to='/memberCenter/myService'>部落格</Link></li>
                        </ul>
                    </div>
                    <a href='http://localhost:3000/session/logout' style={{ textDecoration: 'none' }}>
                        <div id='logout' className='mt-2 logout' onClick={this.logout} style={{ cursor: 'pointer' }}>
                            <img className='my-2 mr-3' style={{ width: '15px' }} src={require('./images/Group162.png')} />
                            <span className='text-danger' style={{ fontWeight: '600' }}>登出</span>
                        </div></a>
                </div>
            </React.Fragment>
        )
    }
}


export default MemberCenter;
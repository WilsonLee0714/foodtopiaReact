import React, { Component } from 'react';
import { LINK } from 'react-router-dom';
import './MemberCenter.scss';

class MemberCenter extends Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <React.Fragment>
                <div className='centerWrap mt-3 d-flex flex-column p-4'>
                    <div>
                        <img className='my-2 mr-2' style={{ width: '45px' }} src={require('./images/Group158.png')} />
                        Hi UserName
                    </div>
                    <div>
                        <h3 className='py-3'>帳號管理</h3>
                    </div>
                    <div>
                        <ul>
                            <li>基本資料</li>
                            <li>訂閱通知</li>
                            <li>收藏清單</li>
                            <li>我的訂單</li>
                            <li>客服系統</li>
                        </ul>
                    </div>
                    <div className='mt-5'>
                        <img className='my-2 mr-3' style={{ width: '15px' }} src={require('./images/Group162.png')} />
                        登出
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default MemberCenter;
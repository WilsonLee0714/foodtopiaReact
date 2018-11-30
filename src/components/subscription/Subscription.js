import React, { Component } from 'react';
import './Subscription.scss';
import { Link } from 'react-router-dom';

class Subscription extends Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <React.Fragment>
                <div className='subWrap'>
                    <div className='infoWrap ml-5 mb-5 mt-3 p-3'>
                        <h4 className='infoTitle p-3'>電子郵件通知</h4>
                        <table className='w-100'>
                            <tr>
                                <td>跟著做</td>
                                <td><input className='mr-2' type='checkbox'/>我的食譜有人跟著做</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input className='mr-2' type='checkbox' />食譜作者回應我跟者做的照片</td>
                            </tr>
                            <tr>
                                <td><hr className='w-100'></hr></td>
                                <td><hr className='w-100'></hr></td>
                            </tr>
                            <tr>
                                <td>留言</td>
                                <td><input className='mr-2' type='checkbox' />我的食譜有新留言</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input className='mr-2' type='checkbox' />食譜作者回覆我的留言</td>
                            </tr>
                            <tr>
                                <td><hr className='w-100'></hr></td>
                                <td><hr className='w-100'></hr></td>
                            </tr>
                            <tr>
                                <td>追蹤</td>
                                <td><input className='mr-2' type='checkbox' />我訂閱的使用者發表新食譜</td>
                            </tr>
                            <tr>
                                <td><hr className='w-100'></hr></td>
                                <td><hr className='w-100'></hr></td>
                            </tr>
                            <tr>
                                <td>粉絲</td>
                                <td><input className='mr-2' type='checkbox' />我有新的粉絲
                                    </td>
                            </tr>
                            <tr>
                                <td><hr className='w-100'></hr></td>
                                <td><hr className='w-100'></hr></td>
                            </tr>
                            <tr>
                                <td>電子報</td>
                                <td>
                                    <input className='mr-2' type='checkbox' />訂閱電子報
                                    </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Subscription;
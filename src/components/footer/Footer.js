import React, { Component } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className='container d-flex justify-content-between py-5'>
                        <div className='d-flex'>
                            <div className='pr-4'>
                                <ul>
                                    <li>首頁</li>
                                    <li>生鮮食材</li>
                                    <li>美味食譜</li>
                                    <li>關於我們</li>
                                    <li>會員中心</li>
                                    <li>購物清單</li>
                                </ul>
                            </div>
                            <div className='pr-4'>
                                <ul>
                                    <li>首頁</li>
                                    <li>生鮮食材</li>
                                    <li>美味食譜</li>
                                    <li>關於我們</li>
                                    <li>會員中心</li>
                                    <li>購物清單</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>首頁</li>
                                    <li>生鮮食材</li>
                                    <li>美味食譜</li>
                                    <li>關於我們</li>
                                    <li>會員中心</li>
                                    <li>購物清單</li>
                                </ul>
                            </div>

                        </div>
                        <div className='d-flex'>
                            <div className='pr-5 flex-1'>
                                社群
                        </div>
                            <div className='pl-5 flex-1'>
                                <div>
                                    語言<br/>
                            <select>
                                        <option>繁體中文</option>
                                    </select>
                                </div>
                                <div>
                                購物所在地<br/>
                            <select>
                                    <option>台灣</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;
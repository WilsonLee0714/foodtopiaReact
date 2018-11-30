import React, { Component } from 'react';
import './MyService.scss';
import { Link } from 'react-router-dom';

class MyService extends Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <React.Fragment>
                <div className='serWrap'>
                    <div className='infoWrap ml-5 mb-5 mt-3 p-3'>
                        <h4 className='infoTitle p-3'>線上客服系統</h4>
                        <div className='content'></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MyService;
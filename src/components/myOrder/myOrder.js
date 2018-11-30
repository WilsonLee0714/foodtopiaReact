import React, { Component } from 'react';
import './myOrder.scss';
import { Link } from 'react-router-dom';

class MyOrder extends Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <React.Fragment>
                <div className='orderWrap'>
                    <div className='infoWrap ml-5 mb-5 mt-3 p-3'>
                        <h4 className='infoTitle p-3'>我的訂單</h4>
                        <div className='content'></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MyOrder;
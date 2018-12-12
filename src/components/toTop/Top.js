import React, { Component } from 'react';
import './Top.scss';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Top extends Component {
    constructor(prop) {
        super(prop)
    }
    smoothscroll() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
    render() {
        return (
            <React.Fragment>
                               <div className='toTop' onClick={this.smoothscroll}>
                    <img src={require('./images/toTop.png')} />
                </div>

            </React.Fragment>
        )
    }
}

export default Top;
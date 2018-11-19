import React, { Component } from 'react';
import './Favorite.scss';
import { Link } from 'react-router-dom';

class Favorite extends Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <React.Fragment>
                <div className='favWrap'>
                    <div className='infoWrap ml-5 mb-5 mt-3 p-3'>
                        <h4 className='infoTitle p-3'>食譜收藏</h4>
                        <div className='content'></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Favorite;
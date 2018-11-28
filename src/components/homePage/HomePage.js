import React, { Component } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
import $ from 'jquery'; 

class HomePage extends Component {
    constructor(prop) {
        super(prop)
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    smoothscroll() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
    }
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className='firstMenu d-flex justify-content-center'>
                        <img src={require('./images/Group125.png')} />
                        <img className='mx-5' src={require('./images/Group127.png')} />
                        <img src={require('./images/Group777.png')} />
                    </div>
                </header>
                <div className='home'>
                    <div>
                        <h3 className='text-center py-5'>一鍵採買食材</h3>
                    </div>
                    <div className='secondMenu d-flex justify-content-center py-4'>
                        <img className='mx-5' src={require('./images/Group72.png')} />
                        <img className='mx-5' src={require('./images/Group70.png')} />
                        <img className='mx-5' src={require('./images/Group71.png')} />
                    </div>
                    <div className='my-5 py-4 text-center'>
                        <img className='mx-5' style={{ width: '1000px' }} src={require('./images/Web111.png')} />
                    </div>
                    <div className='sFotter d-flex justify-content-center align-items-center'>
                        <div className='smallBox1 '>
                            <div className='text-center pt-4 pb-3'>最齊全的食譜種類<br />最便捷的食材採買服務</div>
                            <div className='text-center'>
                                <button type='button' style={{ borderRadius: '20px' }} className='w-50 btn btn-danger'>前往食譜</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='toTop' onClick={this.smoothscroll}>
                    <img src={require('./images/toTop.png')}/>
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage;
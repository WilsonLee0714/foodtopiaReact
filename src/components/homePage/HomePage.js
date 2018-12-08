import React, { Component } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class HomePage extends Component {
    constructor(prop) {
        super(prop)
    }
    componentDidMount() {
        var random = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
        var shuffle = random.sort(function (a, b) {
            return Math.random() - .5
        });
        var header = document.getElementById('header');
        console.log(shuffle[0])
        var i = Math.floor(Math.random() * 6);
        // alert(i)
        header.style.background = `url('./images/${shuffle[i]}')`
        header.style.backgroundRepeat = `no-repeat`
        header.style.backgroundPosition = `center`
        header.style.backgroundSize = `cover`

        window.scrollTo(0, 0);
        setTimeout(function () {
            $('.i1').css('opacity', '1').css('transform', 'translateY(0)');
        }, 1200)
        setTimeout(function () {
            $('.i2').css('opacity', '1').css('transform', 'translateY(0)');
        }, 1500)
        setTimeout(function () {
            $('.i3').css('opacity', '1').css('transform', 'translateY(0)');
        }, 1800)
        $(window).scroll(function () {
            let scrollNow = $(this).scrollTop();
            // console.log(scrollNow);
            let scrollHeight = $(window).height();
            // console.log(scrollHeight);
            if (scrollNow >= scrollHeight / 2) {
                // $('.mainWrap').css('top', scrollHeight + 'px').css('opacity','1')
                $('.secondWrap').css('opacity', '1').css('transform', 'translateX(0)');
            }
            if (scrollNow >= scrollHeight) {
                // $('.mainWrap').css('top', scrollHeight + 'px').css('opacity','1')
                $('.mainWrap').css('opacity', '1').css('transform', 'translateX(0)')
            }
            if (scrollNow >= scrollHeight * 1.5) {
                // $('.mainWrap').css('top', scrollHeight + 'px').css('opacity','1')
                $('.thirdWrap').css('opacity', '1').css('transform', 'translateX(0)')
            }
            //關於立方掉落動畫開始
            // var x = $('.distance').offset().top
            // console.log(scrollNow)
            // if (scrollNow > x / 2 ) {
            //     console.log(x)
            //     $('.wrapper').css('transform', 'translateY(0)')
            // }
            //關於立方掉落動畫結束
        })
    }
    smoothscroll() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
    render() {
        return (
            <React.Fragment>
                <header id='header'>
                    <div className='foodTitle'>
                        <h2 className='rubberBand' style={{ opacity: '0' }}>依照食譜</h2>
                        <h2 className='rubberBand2' style={{ opacity: '0' }}>輕鬆買齊所有食材</h2>
                        <h3 className='rubberBand3' style={{ opacity: '0' }}>Foodtopia 服務最便利的線上超市</h3>
                    </div>
                    <div className='firstMenu d-flex justify-content-center align-items-center homeRDW1'>
                        <Link to='/recipe_head/recipe_list'><img className='i i1' src={require('./images/Group125.png')} /></Link>
                        <Link to='/ingridient_hompage'><img className='mx-5 i i2' src={require('./images/Group127.png')} /></Link>
                        <Link to='/'><img className='i i3' src={require('./images/Group777.png')} /></Link>
                    </div>
                </header>
                    <div className='home'>
                        <div>
                            <h3 className='text-center py-5'>一鍵採買食材</h3>
                        </div>
                        <div className='secondMenu d-flex justify-content-center align-items-center py-4 secondWrap RWD3'>
                            <img className='mx-5' src={require('./images/Group72.png')} />
                            <img className='mx-5' src={require('./images/Group70.png')} />
                            <img className='mx-5' src={require('./images/Group71.png')} />
                        </div>
                    <div className='my-5 py-4 text-center mainWrap RWD4'>
                        <img className='mx-auto' style={{ width: '1000px' }} src={require('./images/Web111.png')} />
                    </div>
                    <div className='sFotter d-flex justify-content-center align-items-center thirdWrap'>
                        <div className='smallBox1 '>
                            <div className='text-center pt-4 pb-3'>最齊全的食譜種類<br />最便捷的食材採買服務</div>
                            <div className='text-center'>
                                <Link to='/recipe_head/recipe_list'><button type='button' style={{ borderRadius: '20px' }} className='w-50 btn btn-danger'>前往食譜</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='toTop' onClick={this.smoothscroll}>
                    <img src={require('./images/toTop.png')} />
                </div>

            </React.Fragment>
        )
    }
}

export default HomePage;
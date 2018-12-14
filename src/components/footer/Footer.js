import React, { Component } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(prop) {
    super(prop)
  }
  //收藏登入判定
  love = () => {
    console.log("123")
    fetch('http://localhost:3000/session/info', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    }).then(function (res) {
      return res.json();
    }).then((a) => {
      if (a.login == 1) {
        window.location.assign('/love');
      } else {
        window.location.assign('/login');
      }
    })
  }
  basic = () => {
    console.log("123")
    fetch('http://localhost:3000/session/info', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    }).then(function (res) {
      return res.json();
    }).then((a) => {
      if (a.login == 1) {
        window.location.assign('/memberCenter/BasicInfo');
      } else {
        window.location.assign('/login');
      }
    })
  }
  order = () => {
    console.log("123")
    fetch('http://localhost:3000/session/info', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    }).then(function (res) {
      return res.json();
    }).then((a) => {
      if (a.login == 1) {
        window.location.assign('/memberCenter/myOrder');
      } else {
        window.location.assign('/login');
      }
    })
  }
  sub = () => {
    console.log("123")
    fetch('http://localhost:3000/session/info', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    }).then(function (res) {
      return res.json();
    }).then((a) => {
      if (a.login == 1) {
        window.location.assign('/memberCenter/subscription');
      } else {
        window.location.assign('/login');
      }
    })
  }
  blog = () => {
    console.log("123")
    fetch('http://localhost:3000/session/info', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    }).then(function (res) {
      return res.json();
    }).then((a) => {
      if (a.login == 1) {
        window.location.assign('/new_blog');
      } else {
        window.location.assign('/login');
      }
    })
  }
  render() {
    const cartNum = () => {
      if (this.props.products.length < 1){
        return 'cartNum d-none'
      } else {
        return 'cartNum'
      }
    }
    return (
      <React.Fragment>
        <footer>
          <div className='container d-flex justify-content-between py-5 footerRWD'>
            <div className='d-flex RWD2'>
              <div className='pr-4'>
                <ul>
                  <Link to='/homePage'><li>首頁</li></Link>
                  <Link to='/recipe_head/recipe_list'><li>生鮮食材</li></Link>
                  <Link to='/ingridient_hompage'><li>美味食譜</li></Link>
                  <a href="http://localhost:3000/session/login"><li>會員中心</li></a>
                </ul>
              </div>
              <div className='pr-4'>
                <ul>
                  <li onClick={this.love}><a href=''>食譜收藏</a></li>
                  <li onClick={this.basic}><a href=''>基本資料</a></li>
                  <li onClick={this.order}><a href=''>訂單紀錄</a></li>
                  <li onClick={this.sub}><a href=''>訂閱通知</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className='c' onClick={this.props.cartToggle}>購物車</li>
                  <div key={this.props.products} id='cartNum' className={cartNum()} >{this.props.products.length}</div>
                  <li onClick={this.blog}><a href=''>部落格</a></li>
                </ul>
              </div>

            </div>
            <div className='d-flex social'>
              <div className='pr-1 flex-1'>
                <img className='ss' src={require('./images/i13.png')} />
              </div>
              <div className='pl-5 flex-1'>
                <div>
                  語言<br />
                  <select>
                    <option>繁體中文</option>
                  </select>
                </div>
                <div>
                  購物所在地<br />
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
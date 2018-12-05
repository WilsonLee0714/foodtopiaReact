import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Button, Container, Row, Col} from 'reactstrap';
import "./Order.scss";

class Order_successful extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <React.Fragment>
          <Container className='orderPage'>
            <div
              className="orderSuccess d-flex flex-column justify-content-center align-items-center">
              <div className='mt-5 mb-4'>
                <h3 className="text-align">結帳成功</h3>
              </div>
              <div>
                <img
                  className='tada'
                  src={require('../registerSuccessful/images/checkOK.png')}/>
              </div>
              <div className="text-center mt-4">
                <p>我們將盡快為您安排出貨<br/>感謝您的購買!預祝您烹飪愉快!!</p>
              </div>
              <div className="d-flex my-3 flex-md-row flex-column">
                <Link to='/homePage'>
                  <button
                    className='btn btn1 btn-lg text-light btn-danger mx-3 my-1'
                    type="button">返回首頁</button>
                </Link>
                <Link to='/memberCenter/myOrder'>
                  <button
                    className='btn btn1 btn-lg text-danger btn-outline-danger mx-3 my-1'
                    type="button">查看訂單紀錄</button>
                </Link>
              </div>
            </div>
          </Container>
        </React.Fragment>

    )
  }
  componentDidMount() {
    window.scrollTo(0, 0);

  }
}

export default Order_successful;

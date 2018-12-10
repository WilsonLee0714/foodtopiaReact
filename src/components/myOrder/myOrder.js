import React, { Component } from 'react';
import './myOrder.scss';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class MyOrder extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            order: [],
            orderDetail: []
        }
    }
    handleClick = (e) => {
        // e.preventDefault();
        // alert(e.target.dataset.id)
        var order_num = e.target.dataset.id;
        fetch(`http://localhost:3000/users/orderDetail?order_num=${order_num}`, {
            method: 'GET',
        }).then(function (res) {
            console.log(res);
            return res.json();
        }).then((a) => {
            // alert(a)
            this.setState({ orderDetail: a })
            // console.log(this.state.orderDetail)
            var blackLight = document.getElementById('blackLight');
            blackLight.style.display = 'block';
        })
    }
    handleClick2 = (e) => {
        var blackLight = document.getElementById('blackLight');
        blackLight.style.display = 'none';

    }
    componentDidMount() {
        fetch('http://localhost:3000/session/info', {
            method: 'GET',
            credentials: 'include'
        }).then(function (res) {
            console.log(res);
            return res.json();
        }).then((a) => {
            fetch(`http://localhost:3000/users/account?sid=${a.sid}`, {
                method: 'GET',
            }).then(function (res) {
                console.log(res);
                return res.json();
            }).then((a) => {
                this.setState({ order: a.reverse() })
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <div id='blackLight' className='blackLight' onClick={this.handleClick2}>
                    <div className='sbox'>
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">產品</th>
                                    <th scope="col">價錢</th>
                                    <th scope="col">數量</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.orderDetail.map((item) => 
                                    <tr>
                                        <th scope="row">{item.product_name}</th>
                                        <td>{item.price}</td>
                                        <td>{item.qty}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='orderWrap'>
                    <div className='infoWrap ml-5 mb-5 mt-3 p-3'>
                        <h4 className='infoTitle p-3'>訂單紀錄</h4>
                        <div className='content'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">訂單編號</th>
                                        <th scope="col">姓名</th>
                                        <th scope="col">手機</th>
                                        <th scope="col">地址</th>
                                        <th scope="col">寄送方式</th>
                                        <th scope="col">送達時間</th>
                                        <th scope="col">付款方式</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.order.map((item, i) =>
                                        <tr className='shover' style={{ fontSize: '.8em' }} onClick={this.handleClick}>
                                            <th data-id={item.order_num} style={{ width: '10%' }} scope="row">{item.order_num}<br />{item.created_at}</th>
                                            <td data-id={item.order_num} style={{ width: '10%' }}>{item.name}</td>
                                            <td data-id={item.order_num} style={{ width: '10%' }}>{item.mobile}</td>
                                            <td data-id={item.order_num} style={{ width: '20%' }}>{item.zipCode + item.county + item.district}<br />{item.address}</td>
                                            <td data-id={item.order_num} style={{ width: '10%' }}>{item.ship}</td>
                                            <td data-id={item.order_num} style={{ width: '10%' }}>{item.ship_date}<br />{item.ship_time}</td>
                                            <td data-id={item.order_num} style={{ width: '10%' }}>{item.pay}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MyOrder;
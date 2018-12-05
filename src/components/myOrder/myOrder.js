import React, { Component } from 'react';
import './myOrder.scss';
import { Link } from 'react-router-dom';

class MyOrder extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            order: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/session/info', {
      method: 'GET',
      credentials: 'include'
    }).then(function (res) {
      console.log(res);
      return res.json();
    }).then((a) => {
        fetch(`http://localhost:3000/users/account?sid=${a.sid}`, {
            method: 'GET',
        //     mode:'cors',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({
        //     mobile: a.mobile,
        // })
        }).then(function (res) {
            console.log(res);
            return res.json();
        }).then((a) => {
            this.setState({order:a.reverse()})
        })
    })
    }
    render() {
        return (
            <React.Fragment>
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
                            {this.state.order.map(item=>
                              <tr style={{fontSize:'.8em'}}>
                                <th style={{width:'10%'}} scope="row">{item.order_num}<br/>{item.created_at}</th>
                                <td style={{width:'10%'}}>{item.name}</td>
                                <td style={{width:'10%'}}>{item.mobile}</td>
                                <td style={{width:'20%'}}>{item.zipCode+item.county+item.district}<br/>{item.address}</td>
                                <td style={{width:'10%'}}>{item.ship}</td>
                                <td style={{width:'10%'}}>{item.ship_date}<br/>{item.ship_time}</td>
                                <td style={{width:'10%'}}>{item.pay}</td>
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
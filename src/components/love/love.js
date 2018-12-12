import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./love.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            loves:[]
        }
    }
    getCommunitys()  {
        fetch("http://localhost:3000/love/love_m", {  
            method: 'GET',
            mode:"cors",
            credentials: 'include',})
        .then(res => res.json())
        .then(loves => this.setState({ 
            loves:loves
        }))
    }
    componentDidMount(){
        this.getCommunitys();
    }
    render() {
        return (
            <React.Fragment>
                <div className="love_background">
                    <h2>收藏清單</h2>
                    <img className="backImg1" src={require('./img/bg2.png')} />
                    <img className="backImg2" src={require('./img/bg5.png')} />
                    <img className="backImg3" src={require('./img/column_bg.png')} />
                    <div className="love row d-flex">
                        {this.state.loves.map(love=>
                            <div key={love.id} className="p_card">
                                <div className="upper_card">
                                    <Link to={`/page/${love.id}`}><img className="card_pic" src ={require(`./img/${love.menu_img}`)} alt="" />  </Link>
                                </div>
                                <div className="lower_card">
                                    <div className="card_title title2">{love.menu}</div>
                                    <div className="card_text text">{love.Introduction}</div>
                                </div> 
                            </div>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;

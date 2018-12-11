import React, { Component } from 'react';
import './Favorite.scss';
import { Link } from 'react-router-dom';

class Favorite extends Component {
    constructor(prop) {
        super(prop)
        this.state={
            loves:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/love/love_m", {  
            method: 'GET',
            mode:"cors",
            credentials: 'include',})
        .then(res => res.json())
        .then(loves => this.setState({ 
            loves:loves
        }))
    }
    render() {
        return (
            <React.Fragment>
                <div className='favWrap'>
                    <div className='infoWrap ml-5 mb-5 mt-3 p-3'>
                        <h4 className='infoTitle p-3'>食譜收藏</h4>
                        <div className='content d-flex row'>
                        {this.state.loves.map(love=>
                            <div key={love.id} className="p_card">
                                <div className="upper_card">
                                    {/* <Link to={`/page/${love.id}`} ><img className="card_pic" src ={require(`./img/${love.menu_img}.jpg`)} alt="" /></Link> */}
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
                </div>
            </React.Fragment>
        )
    }
}

export default Favorite;
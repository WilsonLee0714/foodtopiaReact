import React, { Component } from "react";
import "./food_recipe.scss";
import { Link } from "react-router-dom";
import $ from 'jquery';

class Food_recipe_no_member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [],
            id:"",
          }
    }

    getMemberMenu=(sid)=> {
        fetch("http://localhost:3000/foodtopia/member_menu/"+sid)
            .then(res => res.json())
            .then(menus => this.setState({
                menus: menus,
            }))
    }
    componentDidMount(){
        let sid=this.props.sid
        this.getMemberMenu(sid)
    }

    render() {
        return (
            <React.Fragment>
                <div className="recipe_diary row d-flex">
                    {this.state.menus.map(menu =>  
                        <div key={menu.id} className="col-lg-4 col-sm-6 col-12">
                            <div className="food_recipe">
                                <div className="recipe_img">
                                    <Link to={`/page/${menu.id}`} ><img src={require(`./img/${menu.menu_img}.jpg`)} alt="" /></Link>
                                </div>
                                <h6>{menu.menu}</h6>
                                <p className="line"></p>
                                <p className="introduction">{menu.Introduction}</p>
                            </div>
                        </div>
                    )}
                </div>
                
            </React.Fragment>
        );
    }
    
}

export default Food_recipe_no_member;
import React, { Component } from "react";
import "./food_recipe.scss";
import { Link } from "react-router-dom";

class Food_recipe_month extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {

        return (
            <React.Fragment>
                <div className="recipe_diary row d-flex">
                    {this.props.menus.map(menu =>  
                        <div key={menu.id} className="col-4">
                            <div className="food_recipe">
                                <div className="recipe_img">
                                    <a href={`/page/${menu.id}`} ><img src={require(`./img/${menu.menu_img}.jpg`)} alt="" /></a>
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

export default Food_recipe_month;
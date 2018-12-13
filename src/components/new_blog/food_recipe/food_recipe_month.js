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
                        <div key={menu.id} className="col-lg-4 col-sm-6 col-12">
                            <div className="food_recipe">
                                <div className="recipe_img">
                                    <Link to={`/page/${menu.id}`} ><img src={(`http://localhost:3000/upload/${menu.menu_img}`)} alt="" /></Link>
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
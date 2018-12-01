import React, { Component } from "react";
import "./recipe.scss";
import { Link } from "react-router-dom";

class Recipe extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="recipe">
                    <Link class="action-button shadow animate red upload_blog_img" to="#">上傳食譜</Link>
                    <div className="recipe_text container">
                        <h1>My recipe</h1>
                        <p>最新食譜</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Recipe;

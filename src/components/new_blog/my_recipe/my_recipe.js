import React, { Component } from "react";
import "./my_recipe.scss";

class My_recipe extends Component {
    constructor(props) {
      super(props)
}
    render() {
        return (
            <React.Fragment>
                {/* blog食譜清單標題 */}
                <div className="recipe_header">
                    <h1>My Recipe</h1>
                    <div className="line"></div>
                    <p>最新食譜</p>
                </div>
            </React.Fragment>
        )
    }
}

export default My_recipe;
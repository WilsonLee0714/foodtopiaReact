import React, { Component } from "react";
import "./month_my_recipe.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Month_my_recipe extends Component {
    constructor(props) {
      super(props)
}
    render() {
        return (
            <React.Fragment>
                {/* blog食譜清單標題 */}
                {this.props.filter_months.map(filter_month=>
                    <div key={filter_month.id} className="recipe_header">
                        <h1>My Recipe</h1>
                        <p>{filter_month.total_time}</p>
                    </div>
                )}
                
            </React.Fragment>
        )
    }
}

export default Month_my_recipe;
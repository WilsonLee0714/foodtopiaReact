import React, { Component } from "react";
import "./filter.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';
class Filter extends Component {
    constructor(props) {
      super(props)
      this.state = {
        new_recipes: [],
        filter_months:[]
      }
}

//食譜map function
getnew_recipes() {
    fetch("http://localhost:3000/update/menu")
        .then(res => res.json())
        .then(new_recipes => this.setState({
            new_recipes: new_recipes,
        }))
};
//月份 map function
getfilter_months(){
    fetch("http://localhost:3000/upload/upload_date/")
    .then(res => res.json())
    .then(filter_months => this.setState({ 
        filter_months: filter_months,
    }))
}

componentDidMount(){
    //hover特效
    $(".filter_option").hover(function(){
        $(this).find(".content_menu").parent().find("ul").toggleClass("active1");
    });
    //月份 map function
    this.getfilter_months();
    //食譜map function
    this.getnew_recipes(); 
}

    render() {     
        return (
            <React.Fragment>
                <div className="filter row d-flex">
                    <div className="filter_option col-md-4 col-sm-12 col-12">
                        <div className="ani_line">
                            <h2>近期食譜</h2>
                            <br />
                            <h3>Recent Recipes</h3>
                        </div>
                        <div className="filter_option_content">
                            <ul className="content_menu">
                                {this.state.new_recipes.map(new_recipe=>
                                    <Link key={new_recipe.id} to={(`/page/${new_recipe.id}`)}><li>{new_recipe.menu}</li></Link>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="filter_option filter_option_line col-md-4 col-sm-12 col-12">
                        <div className="ani_line">
                            <h2>食譜彙整</h2>
                            <br />
                            <h3>Recipe Collection</h3>
                        </div>
                        <div className="filter_option_content">
                            <ul className="content_menu">
                                {this.state.filter_months.map(filter_month=>
                                    <a key={filter_month.id} href={(`/month/${filter_month.id}`)}><li>{filter_month.total_time}</li></a>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="filter_option filter_option_line col-md-4 col-sm-12 col-12">
                        <div className="ani_line">
                            <h2>熱烈迴響</h2>
                            <br />
                            <h3>Recent repercussions</h3>
                        </div>
                        <div className="filter_option_content">
                            <ul className="content_menu">
                                <li>123</li>
                                <li>456</li>
                                <li>789</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Filter;
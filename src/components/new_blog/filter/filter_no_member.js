import React, { Component } from "react";
import "./filter.scss";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import $ from 'jquery';
class Filter extends Component {
    constructor(props) {
      super(props)
      this.state = {
        new_recipes: [],
        filter_months:[],
        filter_comments:[],
      }
}

//食譜map function
getnew_recipes(sid) {
    fetch("http://localhost:3000/update/member_menu/"+sid,{  
        method: 'GET',
        mode:"cors",
        credentials: 'include',})
        .then(res => res.json())
        .then(new_recipes => this.setState({
            new_recipes: new_recipes,
        }))
};
//月份 map function
getfilter_months(){
    fetch("http://localhost:3000/upload/upload_date")
    .then(res => res.json())
    .then(filter_months => this.setState({ 
        filter_months: filter_months,
    }))
};
//評論篩選
getfilter_comment(sid){
    fetch("http://localhost:3000/foodtopia/member_comment/"+sid,{  
        method: 'GET',
        mode:"cors",
        credentials: 'include',})
    .then(res => res.json())
    .then(filter_comments => this.setState({ 
        filter_comments: filter_comments,
    }))
};

componentDidMount(){
    //hover特效
    $(".filter_option").hover(function(){
        $(this).find(".content_menu").parent().find("ul").toggleClass("active1");
    });
    //月份 map function
    this.getfilter_months();
    //食譜map function
    this.getnew_recipes(this.props.sid);
    //評論篩選
    this.getfilter_comment(this.props.sid);
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
                                    <Link key={new_recipe.id} to={`/page/${new_recipe.id}`}><li>{new_recipe.menu}</li></Link>
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
                                    <a key={filter_month.id} href={`/month_no_member/${this.props.sid}/${filter_month.id}`}><li>{filter_month.total_time}</li></a>
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
                            <ul className="content_menu comment">
                                {this.state.filter_comments.map(filter_comment=>
                                    <Link key={filter_comment.id} to={`/page/${filter_comment.recipe_id}`}><li>{filter_comment.comment_name}在您的{filter_comment.menu}上留言</li></Link>
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* RWD-block */}
                    <div className="filter_option1 col-md-4 col-sm-12 col-12">
                        <div className="ani_line">
                            <h2>近期食譜</h2>
                            <br />
                            <h3>Recent Recipes</h3>
                        </div>
                        <div className="filter_option_content">
                            <ul className="content_menu">
                                {this.state.new_recipes.map(new_recipe=>
                                    <Link className="anone" key={new_recipe.id} to={`/page/${new_recipe.id}`}><li>{new_recipe.menu}</li></Link>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="filter_option1 filter_option_line col-md-4 col-sm-12 col-12">
                        <div className="ani_line">
                            <h2>食譜彙整</h2>
                            <br />
                            <h3>Recipe Collection</h3>
                        </div>
                        <div className="filter_option_content">
                            <ul className="content_menu">
                                {this.state.filter_months.map(filter_month=>
                                    <Link className="anone" key={filter_month.id} to={`/month_no_member/${this.props.sid}/${filter_month.id}`}><li>{filter_month.total_time}</li></Link>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="filter_option1 filter_option_line col-md-4 col-sm-12 col-12">
                        <div className="ani_line">
                            <h2>熱烈迴響</h2>
                            <br />
                            <h3>Recent repercussions</h3>
                        </div>
                        <div className="filter_option_content">
                            <ul className="content_menu comment">
                                {this.state.filter_comments.map(filter_comment=>
                                    <Link className="anone" key={filter_comment.id} to={`/page/${filter_comment.recipe_id}`}><li>{filter_comment.comment_name}在您的{filter_comment.menu}上留言</li></Link>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Filter;
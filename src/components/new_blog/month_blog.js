import React, { Component } from "react";
// import "./month_blog.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Blog_slider from "./blog_slider/blog_slider"
import Month_my_recipe from "./my_recipe/month_my_recipe"
import Food_recipe_month from "./food_recipe/food_recipe_month"
import Filter from "./filter/filter"
import Footer from "./footer/footer"
import Fix_button from "./fix_button/fix_button"

class Month_blog extends Component {
    constructor(props) {
      super(props)
      this.state={
            //篩選月份食譜
            menus: [], 
            filter_months:[]
      }
      console.log(this)
}
componentDidMount() {
    //篩選月份食譜
    let id = this.props.match.params.id
    this.getMonthMenus(id);
    //月份 map function 
    this.getfilter_months(id);
}
//篩選月份食譜
getMonthMenus(upload_time_sid) {
    fetch("http://localhost:3000/month/menu/"+upload_time_sid)
        .then(res => res.json())
        .then(menus => this.setState({
            menus: menus,
        }))
}
//月份 map function
getfilter_months(id){
    fetch("http://localhost:3000/upload/upload_date/"+id)
    .then(res => res.json())
    .then(filter_months => this.setState({ 
        filter_months: filter_months,
    }))
}
    render() {
        return (
            <React.Fragment>
                <Blog_slider />
                <Month_my_recipe filter_months={this.state.filter_months}/>
                <Food_recipe_month menus={this.state.menus}/>
                <Filter />
                <Footer />
                <Fix_button />
            </React.Fragment>
        )
    }
}

export default Month_blog;
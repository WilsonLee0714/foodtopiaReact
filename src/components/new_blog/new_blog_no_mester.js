import React, { Component } from "react";
// import "./new_blog.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Blog_slider from "./blog_slider/blog_slider"
import My_recipe from "./my_recipe/my_recipe"
import Food_recipe from "./food_recipe/food_recipe"
import Filter from "./filter/filter"
import Footer from "./footer/footer"

class New_blog extends Component {
    constructor(props) {
      super(props)
}
componentDidMount(){
    window.scrollTo(0,0);
}
    render() {
        return (
            <React.Fragment>
                <Blog_slider />
                <My_recipe />
                <Food_recipe />
                <Filter />
                <Footer />
            </React.Fragment>
        )
    }
}

export default New_blog;
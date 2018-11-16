import React, { Component } from "react";
import "./content.scss";
import Recipe from "./recipe/recipe";
import { Link } from "react-router-dom";
import Food_recipe from "./food_recipe/food_recipe";

class Content extends Component {
    constructor(props) {
      super(props)
      this.initState = {
        menu:'',
        menu_img:'',
        Introduction:''
    }
    this.state = {
        menus: [],
        menu: this.initState,
        type: 'add'
    }
}

componentDidMount() {
    this.getMenu();
}
getMenu() {
    fetch("http://localhost:3000/foodtopia/menu")
        .then(res => res.json())
        .then(menus => this.setState({ 
            menus: menus,
            menu:this.initState,
            type:'add'
        }))
};

    render() {
        return (
            <React.Fragment>
                <div className="slider">
                    <div className="blog_text">
                        <h2>使用者の廚房</h2>
                        <p>歡迎來到我的廚房，一起來做美食吧!</p>
                    </div>
                    <div className="blog_text_button">
                        <Link class="action-button shadow animate yellow change_blog_img" to="#">更改圖片</Link>
                    </div>
                </div>
                <Recipe/>
                <Food_recipe menus={this.state.menus}/>
            </React.Fragment>
        );
    }
}

export default Content;

import React, { Component } from "react";
import "./content.scss";
import Recipe from "./recipe/recipe";
import { Link } from "react-router-dom";
import Food_recipe from "./food_recipe/food_recipe";
import Footer from "./footer/footer";

class Content extends Component {
    constructor(props) {
      super(props)
      this.initState = {
        id:'',
        menu:'',
    }
    this.state = {
        updates:[],
        update:this.initState,
        type: 'add'
    }
}

componentDidMount() {
    this.getUpdate();
}

getUpdate() {
    fetch("http://localhost:3000/update/menu")
        .then(res => res.json())
        .then(updates => this.setState({ 
            updates: updates,
            update:this.initState,
            type:'add'
        }))
};

    render() {
        return (
            <React.Fragment>
                <div className="slider">
                    <div className="blog_text">
                        <div className="header d-flex">
                            <h2>使用者の廚房</h2><i class="far fa-edit"></i>
                        </div>
                        <div className="content d-flex">
                            <p>歡迎來到我的廚房，一起來做美食吧!</p><i class="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="blog_text_button">
                        <Link class="action-button shadow animate yellow change_blog_img" to="#">更改圖片</Link>
                    </div>
                </div>
                <Recipe/>
                <Food_recipe />
                <Footer updates={this.state.updates} />
            </React.Fragment>
        );
    }
}

export default Content;

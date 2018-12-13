import React, { Component } from "react";
import "./new_blog.scss";
import Blog_slider from "./blog_slider/blog_slider"
import Month_my_recipe from "./my_recipe/month_my_recipe"
import Food_recipe_month from "./food_recipe/food_recipe_month"
import Filter_no_member from "./filter/filter_no_member"
import Footer from "./footer/footer"

class Month_blog extends Component {
    constructor(props) {
      super(props)
      this.state={
        communitys:[],
        //篩選月份食譜
        menus: [], 
        filter_months:[],
      }
}

//讀取blog個人資料
getCommunitys(sid) {
    fetch("http://localhost:3000/imgup/upload_community/"+sid, {  
        method: 'GET',
        mode:"cors",
        credentials: 'include',})
        .then(res => res.json())
        .then(communitys => this.setState({ 
            communitys: communitys,
        }))
}

//篩選月份食譜
getMonthMenus(upload_time_sid) {
    fetch("http://localhost:3000/month/member_menu/"+upload_time_sid+"/"+`${this.props.match.params.sid}`,{
            method: 'GET',
            credentials: 'include'
        })
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

componentDidMount() {
    window.scrollTo(0,0);
    //篩選月份食譜
    let id = this.props.match.params.id;
    this.getMonthMenus(id);
    //月份 map function 
    this.getfilter_months(id);
    //讀取社群
    this.getCommunitys(this.props.match.params.sid);
}
    render() {
        return (
            <React.Fragment>
                <Blog_slider communitys={this.state.communitys}/>
                <Month_my_recipe filter_months={this.state.filter_months}/>
                <Food_recipe_month menus={this.state.menus}/>
                <Filter_no_member sid={this.props.match.params.sid} />
                <Footer communitys={this.state.communitys} />
            </React.Fragment>
        )
    }
}

export default Month_blog;
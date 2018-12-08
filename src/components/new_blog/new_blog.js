import React, { Component } from "react";
// import "./new_blog.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Blog_slider from "./blog_slider/blog_slider"
import My_recipe from "./my_recipe/my_recipe"
import Food_recipe from "./food_recipe/food_recipe"
import Filter from "./filter/filter"
import Footer from "./footer/footer"
import Fix_button from "./fix_button/fix_button"

class New_blog extends Component {
    constructor(props) {
      super(props)
      this.state = {
        communitys:[],
        //上傳圖片檔案
        selectedFile: null,
        //上傳圖片檔名
        img_name:"",
        //修改個人社群
        id: "",
        facebook:"",
        instagram:"",
        google_plus:"",
        youtube:"",
        welcome:"",
        introduction:"",
        //修改食譜
        // filter_months:[],
        // menus:[],
    }
}

//修改會員圖片
    //onclick上傳圖片
fileUploadHandler = (fileUploadHandler) =>{
    const formdata = new FormData();
    formdata.append('image',fileUploadHandler.selectedFile,fileUploadHandler.selectedFile.name);
    fetch("http://localhost:3000/imgup/upload",{
        method:"POST",
        body:formdata
    }).then(function(res){
        return res.json();
    })
    //上傳圖片檔名
    fetch('http://localhost:3000/imgup/upload_img_name', { 
        method: 'PUT',
        mode:"cors",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({img_name:fileUploadHandler.img_name}),
    }).then(() => {
        alert("上傳成功");
        this.getCommunitys();
    })
}
//communitys讀取
getCommunitys = () => {
    fetch("http://localhost:3000/imgup/upload_community", {  
        method: 'GET',
        mode:"cors",
        credentials: 'include',})
    .then(res => res.json())
    .then(communitys => this.setState({ 
        communitys:communitys,
    }))
}

//修改welcome
welcome = (welcome) => {
    //上傳welcome
    fetch('http://localhost:3000/imgup/upload_welcome', { 
        method: 'PUT',
        mode:"cors",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({welcome:welcome.welcome}),
    }).then(() => {
        this.getCommunitys();
    })
}

//修改introduction
introduction = (introduction) => {
    //上傳introduction
    console.log(introduction)
    fetch('http://localhost:3000/imgup/upload_introduction', { 
        method: 'PUT',
        mode:"cors",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({introduction:introduction.introduction}),
    })
    .then(() => {
        this.getCommunitys();
    })
}

//社群修改
update = (update) => {
    fetch('http://localhost:3000/imgup/upload_community', {
        method: 'PUT',
        mode:"cors",
        credentials: 'include',
        body: JSON.stringify({
            facebook:update.facebook,
            instagram:update.instagram,
            google_plus:update.google_plus,
            youtube:update.youtube,
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(() => {
        alert("更新成功")
        this.getCommunitys();
    })
}

componentDidMount(){
    window.scrollTo(0,0);
    //讀取社群
    this.getCommunitys();
}
    render() {
        return (
            <React.Fragment>
                <Blog_slider communitys={this.state.communitys} />
                <My_recipe />
                <Food_recipe />
                <Filter />
                <Footer communitys={this.state.communitys} />
                <Fix_button fileUploadHandler={this.fileUploadHandler} welcome={this.welcome} introduction={this.introduction} update={this.update} />
            </React.Fragment>
        )
    }
}

export default New_blog;
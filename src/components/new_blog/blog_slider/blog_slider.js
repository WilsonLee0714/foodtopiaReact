import React, { Component } from "react";
import "./blog_slider.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class New_blog extends Component {
    constructor(props) {
      super(props)
      this.state = {
        //讀圖片檔名
        imgups:[],
        welcomes:[],
        introductions:[],
    }
}

//讀取圖片檔名
getUploadImg() {
    fetch("http://localhost:3000/imgup/upload_img_name", {  
        method: 'GET',
        mode:"cors",
        credentials: 'include',})
        .then(res => res.json())
        .then(imgups => this.setState({ 
            imgups: imgups,
        }))
}
//讀取welcome
getWelcome() {
    fetch("http://localhost:3000/imgup/upload_welcome", {  
        method: 'GET',
        mode:"cors",
        credentials: 'include',})
        .then(res => res.json())
        .then(welcomes => this.setState({ 
            welcomes: welcomes,
        }))
}
//讀取introduction
getIntroduction() {
    fetch("http://localhost:3000/imgup/upload_introduction", {  
        method: 'GET',
        mode:"cors",
        credentials: 'include',})
        .then(res => res.json())
        .then(introductions => this.setState({ 
            introductions: introductions,
        }))
}
componentDidMount() {
    //讀取圖片檔名
    this.getUploadImg();
    //讀取welcome讀取introduction
    this.getWelcome();
    this.getIntroduction();
}

    render() {
        return (
            <React.Fragment>
                {/* Header */}
                {this.state.imgups.map(imgup=>
                 <div key={imgup.id} className="background">
                    <img src={(`http://localhost:3000/imgup/${imgup.img_name}`)} alt="" />
                </div>
                )}
                {/* 歡迎語 */}
                <div className="background_text">
                    {this.state.welcomes.map(welcome=>
                        <h2>{welcome.welcome}</h2>
                    )}
                    {this.state.introductions.map(introduction=>
                         <p>{introduction.introduction}</p>
                    )}
                   
                </div>
            </React.Fragment>
        )
    }
}

export default New_blog;
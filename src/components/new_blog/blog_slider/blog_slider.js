import React, { Component } from "react";
import "./blog_slider.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class New_blog extends Component {
    constructor(props) {
      super(props)
      this.state = {
        //讀圖片檔名
        imgups:[],
    }
}

//讀取資料
getUploadImg() {
    fetch("http://localhost:3000/imgup/upload_name",)
        .then(res => res.json())
        .then(imgups => this.setState({ 
            imgups: imgups,
        }))
}
componentDidMount() {
    this.getUploadImg();
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
                    <h2>歡迎來到使用者の分享天地</h2>
                    <p>這裡主要都是分享西式料理居多，歡迎大家一起與我一起分享。</p>
                </div>
            </React.Fragment>
        )
    }
}

export default New_blog;
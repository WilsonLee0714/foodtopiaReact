import React, { Component } from "react";
import "./blog_slider.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class New_blog extends Component {
    constructor(props) {
      super(props)
}
    render() {
        return (
            <React.Fragment>
                {/* Header */}
                {this.props.imgups.map(imgup=>
                 <div key={imgup.id} className="background">
                    <img src={(`http://localhost:3000/imgup/${imgup.img_name}`)} alt="" />
                </div>
                )}
                {/* 歡迎語 */}
                <div className="background_text">
                    {this.props.welcomes.map(welcome=>
                        <h2>{welcome.welcome}</h2>
                    )}
                    {this.props.introductions.map(introduction=>
                         <p>{introduction.introduction}</p>
                    )}
                   
                </div>
            </React.Fragment>
        )
    }
}

export default New_blog;
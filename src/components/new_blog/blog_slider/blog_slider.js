import React, { Component } from "react";
import "./blog_slider.scss";


class New_blog extends Component {
    constructor(props) {
      super(props)
}
    render() {
        return (
            <React.Fragment>
                {/* Header */}
                {this.props.communitys.map(community=>
                    <div key={community.id}>
                        <div className="background">
                            <img src={(`http://localhost:3000/imgup/${community.img_name}`)} alt="" />
                        </div>
                        {/* 歡迎語 */}
                        <div className="background_text">
                            <h2>{community.welcome}</h2>
                            <p>{community.introduction}</p>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default New_blog;
import React, { Component } from "react";
import "./footer.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
      super(props)
}

    render() {
        return (
            <React.Fragment>
                <div className="footer_background">
                    <h2>個人社群↓</h2>
                    <div className="blog_footer_icon container d-flex">
                            {this.props.communitys.map(community=>
                                <div key={community.id} className="footer_icon d-flex justify-content-between">
                                    <a className="link_black" href={(`${community.facebook}`)}><i className="icon fab fa-facebook col-2"></i></a>
                                    <a className="link_black" href={(`${community.instagram}`)}><i className="icon fab fa-instagram col-2"></i></a>
                                    <a className="link_black" href={(`${community.google_plus}`)}><i className="icon fab fa-google-plus-g col-2"></i></a>
                                    <a className="link_black" href={(`${community.youtube}`)}><i className="icon fab fa-youtube col-2"></i></a>
                                </div>
                            )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;
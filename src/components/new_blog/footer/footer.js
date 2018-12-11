import React, { Component } from "react";
import "./footer.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';

class Footer extends Component {
    constructor(props) {
        super(props);
        
    }

    // componentDidUpdate() {
    //     if (this.props.communitys.facebook == null) {
    //         $("#alink1").addClass('disabled')
    //     }
    //     if (this.props.communitys.instagram == null) {
    //         $("#alink2").addClass('disabled')
    //     }
    //     if (this.props.communitys.google_plus == null) {
    //         $("#alink3").addClass('disabled')
    //     }
    //     if (this.props.communitys.youtube == null) {
    //         $("#alink4").addClass('disabled')
    //     }
    // }

    render() {
        return (
            <React.Fragment>
                <div className="footer_background">
                    <h2>個人社群↓</h2>
                    <div className="blog_footer_icon container d-flex">
                        {this.props.communitys.map(community =>
                            <div key={community.id} className="footer_icon d-flex row">
                                <a className="link_black col-3" id="alink1" href={(`${community.facebook}`)}><i className="icon fab fa-facebook col-2"></i></a>
                                <a className="link_black col-3" id="alink2" href={(`${community.instagram}`)}><i className="icon fab fa-instagram col-2"></i></a>
                                <a className="link_black col-3" id="alink3" href={(`${community.google_plus}`)}><i className="icon fab fa-google-plus-g col-2"></i></a>
                                <a className="link_black col-3" id="alink4" href={(`${community.youtube}`)}><i className="icon fab fa-youtube col-2"></i></a>
                            </div>
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;
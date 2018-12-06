import React, { Component } from "react";
import "./footer.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        communitys:[],
      }
}
//communitys讀取
getCommunitys() {
    fetch("http://localhost:3000/imgup/upload_community", {  
        method: 'GET',
        mode:"cors",
        credentials: 'include',})
        .then(res => res.json())
        .then(communitys => this.setState({ 
            communitys: communitys,
        }))
}
componentDidMount(){
    this.getCommunitys();
}
    render() {
        return (
            <React.Fragment>
                <div className="footer_background">
                    <div className="blog_footer_icon container d-flex">
                            {this.state.communitys.map(community=>
                                <div key={community.id} className="footer_icon d-flex justify-content-between">
                                    <a className="link_black" href={(`${community.facebook}`)}><i className="icon fab fa-facebook col-2"></i></a>
                                    <a className="link_black" href={(`${community.instagram}`)}><i className="icon fab fa-instagram col-2"></i></a>
                                    <a className="link_black" href={(`${community.google_plus}`)}><i className="icon fab fa-google-plus-g col-2"></i></a>
                                    <a className="link_black" href={(`${community.youtube}`)}><i className="icon fab fa-youtube col-2"></i></a>
                                    <a className="link_black" href={(`${community.email}`)}><i className="icon far fa-envelope col-2"></i></a>
                                </div>
                            )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;
import React, { Component } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        
        return (
            <React.Fragment>
                <div className="footer">
                    <div className="container">
                        <div className="col-4">
                        {this.props.updates.map(update => 
                            <Link className="update_article" to="/">{update.menu}<br /></Link>
                            )}
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Footer;
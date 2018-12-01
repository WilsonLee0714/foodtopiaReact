import React, { Component } from "react";
import "./up_load.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Upload_header_img from "./upload_header_img/upload_header_img";



class Up_load extends Component {
    constructor(props) {
      super(props)
}
componentDidMount(){
    // window.location.replace("http://localhost:3001/up_load");
    // window.stop();
}
    render() {
        return (
            <React.Fragment>
                <Upload_header_img />
            </React.Fragment>
        )
    }
}

export default Up_load;

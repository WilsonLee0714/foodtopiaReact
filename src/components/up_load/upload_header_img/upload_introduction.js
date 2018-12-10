import React, { Component } from "react";
import "./upload_header_img.scss";
import $ from "jquery";
import Select_filter_box from "./upload_Introduction/select_filter_box";
import Select_items_box from "./upload_Introduction/select_items_box";

class Upload_Introduction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
        }
    }
    categoryChangeHandler = (id) => {
        this.setState({
            id: id
        })
    }

    render() {
        return (
            <React.Fragment>
                {/* 食材上傳 */}
                <div className="upload_Introduction_title d-flex">
                    {/* 類別 */}
                    <Select_filter_box changeHandler={this.categoryChangeHandler} />
                    {/* 項目 */}
                    <Select_items_box categoryId={this.state.id} />
                    {/* 數量 */}
                    <input className="introduction_number" type="text" />
                </div>
            </React.Fragment>
        );
    }
}

export default Upload_Introduction;

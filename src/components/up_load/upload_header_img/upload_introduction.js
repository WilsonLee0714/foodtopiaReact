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
            numbers:"",
            value1: "",
            value2: "",
        }
    }
    //上傳食材項目
    change = (change) => {
        this.setState({
            value1:change.value1,
            value2:change.value2,
        }, () => {
            this.props.change(this.state);
        })
    }
    //上傳分量
    changeNum = (evt)=>{
        var key = evt.target.id
        var value = evt.target.value
        this.setState({
            [key]:value
        },()=>{
            this.props.changeNum(this.state)
        })
    }
    //篩選
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
                    <Select_items_box categoryId={this.state.id} change={this.change}/>
                    {/* 數量 */}
                    <input className="introduction_number" type="text" onChange={this.changeNum} value={this.state.value} id="numbers"/>
                </div>
            </React.Fragment>
        );
    }
}

export default Upload_Introduction;

import React, { Component } from "react";
import "./upload_header_img.scss";
import $ from "jquery";
import Upload_introduction from "./upload_introduction";

class Upload_header_img extends Component {
    constructor(props) {
        super(props)
        this.state = {
            n: 1,
            recipe_time:"",
            recipe_people:"",
            recipe_difficult:"",
            introduction:"",
            stepImg_1:"",
            stepText_1:"",
            stepImg_2:"",
            stepText_2:"",
            stepImg_3:"",
            stepText_3:"",
            stepImg_4:"",
            stepText_4:"",
            stepImg_5:"",
            stepText_5:"",
            stepImg_6:"",
            stepText_6:"",
        }
    }
    //上傳
    change =(evt)=>{
        let key = evt.target.id
        let data = evt.target.value
        this.setState({
            [key] : data
        })
    }
    send_recipe = () => {

    }
    componentDidMount() {
        //新增欄位
        $("#new_step").on('click', () => {
            var newitem = `<div class="upload_step">
                            <div class="step_number_step d-flex">
                                <form class="input_step_form col-4">
                                    <i class="fas fa-camera-retro camera_icon"></i>
                                    <div class="upload_camera"></div>
                                    <input type="file" onChange={this.change} id="stepImg" class="step_img" />
                                </form>
                                <div class="upload_number_step d-flex col-8 ">
                                    <p class="step_number"></p>
                                    <div class="step_icons">
                                        <i class="step_delete_icon far fa-trash-alt" id="step_delete_icon"></i>
                                        <br />
                                        <textarea class="step_introduction" onChange={this.change} id="stepText" placeholder="步驟敘述..."/>
                                    </div>
                                </div>
                            </div>
                        </div>`
            $('.recipe_step').append(newitem);
            var i = 0;
            $('.upload_step').each(function () {
                i++;
                $(this).find('.step_number').text(i)
            })
        });
        //刪減欄位
        $("#recipe_step").on('click', "#step_delete_icon", function () {
            $(this).parentsUntil(".recipe_step").remove();
            var i = 0;
            $('.upload_step').each(function () {
                i++;
                $(this).find('.step_number').text(i)
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>分享食譜</h1>
                <div className="container d-flex">
                    <div className="upload_header container">
                        {/* 食譜名稱,食譜照上傳 */}
                        <form className="input_form">
                            <input className="form-control header" type="text" placeholder="食譜名稱" aria-label="Search" />
                            <img className="chicken_img" src={require("./img/th.png")} alt="" />
                            <div className="upload_chicken"></div>
                            <img className="line_img" src={require("./img/line_img.png")} alt="" />
                            <input type="file" className="recipe_header_img" />
                            {/* 食譜時間,份量,難度 */}
                            <div className="recipe_dropdowns container d-flex">
                                <select onChange={this.change} value={this.state.value} id="recipe_time" className="select_box select_time_box col-4">
                                    <option value="" className="select_options">時間</option>
                                    <option value="" className="select_options">15分鐘</option>
                                    <option value="" className="select_options">30分鐘</option>
                                    <option value="" className="select_options">45分鐘</option>
                                    <option value="" className="select_options">60分鐘</option>
                                </select>
                                <select onChange={this.change} value={this.state.value} id="recipe_people" className="select_box select_people_box col-4">
                                    <option value="" className="select_options">份量</option>
                                    <option value="" className="select_options">1人份</option>
                                    <option value="" className="select_options">2人份</option>
                                    <option value="" className="select_options">3人份</option>
                                    <option value="" className="select_options">4人份</option>
                                </select>
                                <select onChange={this.change} value={this.state.value} id="recipe_difficult" className="select_box select_difficult_box col-4">
                                    <option value="" className="select_options">難度</option>
                                    <option value="" className="select_options">簡單</option>
                                    <option value="" className="select_options">稍難</option>
                                    <option value="" className="select_options">困難</option>
                                </select>
                            </div>
                            {/* 食譜簡介 */}
                            <textarea className="introduction" value={this.state.value} id="introduction" onChange={this.change} placeholder="食譜簡介..." />
                        </form>
                    </div>
                    {/* 食譜食材 */}
                    <div className="upload_Introduction container">
                        {/* 食材項目 */}
                        <div className="recipe_project d-flex">
                            <h2 className="col-5">類別</h2>
                            <h2 className="col-5 recipe_project_items">品項</h2>
                            <h2 className="col-2 recipe_project_number">數量</h2>
                        </div>
                        <Upload_introduction />
                        <Upload_introduction />
                        <Upload_introduction />
                        <Upload_introduction />
                        <Upload_introduction />
                        <Upload_introduction />
                        <Upload_introduction />
                    </div>
                </div>
                {/* 步驟 */}
                <div className="recipe_step" id="recipe_step">
                    <div className="step_header">
                        <h2>步驟</h2>
                    </div>
                    <div className="upload_step">
                        <div className="step_number_step d-flex">
                            {/* 步驟圖片上傳 */}
                            <form className="input_step_form col-4">
                                <i className="fas fa-camera-retro camera_icon"></i>
                                <div className="upload_camera"></div>
                                <input type="file" onChange={this.change} value={this.state.value} id="stepImg_1" className="step_img" />
                            </form>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">1</p>
                                <div className="step_icons">
                                    <i className="step_delete_icon far fa-trash-alt" id="step_delete_icon"></i>
                                    <br />
                                    <textarea className="step_introduction" value={this.state.value} onChange={this.change} id="stepText_1" placeholder="步驟敘述..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="upload_step">
                        <div className="step_number_step d-flex">
                            {/* 步驟圖片上傳 */}
                            <form className="input_step_form col-4">
                                <i className="fas fa-camera-retro camera_icon"></i>
                                <div className="upload_camera"></div>
                                <input type="file" onChange={this.change} value={this.state.value} id="stepImg_2" className="step_img" />
                            </form>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">2</p>
                                <div className="step_icons">
                                    <i className="step_delete_icon far fa-trash-alt" id="step_delete_icon"></i>
                                    <br />
                                    <textarea className="step_introduction" value={this.state.value} onChange={this.change} id="stepText_2" placeholder="步驟敘述..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="upload_step">
                        <div className="step_number_step d-flex">
                            {/* 步驟圖片上傳 */}
                            <form className="input_step_form col-4">
                                <i className="fas fa-camera-retro camera_icon"></i>
                                <div className="upload_camera"></div>
                                <input type="file" onChange={this.change} value={this.state.value} id="stepImg_3" className="step_img" />
                            </form>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">3</p>
                                <div className="step_icons">
                                    <i className="step_delete_icon far fa-trash-alt" id="step_delete_icon"></i>
                                    <br />
                                    <textarea className="step_introduction" value={this.state.value} onChange={this.change} id="stepText_3" placeholder="步驟敘述..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="upload_step">
                        <div className="step_number_step d-flex">
                            {/* 步驟圖片上傳 */}
                            <form className="input_step_form col-4">
                                <i className="fas fa-camera-retro camera_icon"></i>
                                <div className="upload_camera"></div>
                                <input type="file" onChange={this.change} value={this.state.value} id="stepImg_4" className="step_img" />
                            </form>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">4</p>
                                <div className="step_icons">
                                    <i className="step_delete_icon far fa-trash-alt" id="step_delete_icon"></i>
                                    <br />
                                    <textarea className="step_introduction" value={this.state.value} onChange={this.change} id="stepText_4" placeholder="步驟敘述..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="upload_step">
                        <div className="step_number_step d-flex">
                            {/* 步驟圖片上傳 */}
                            <form className="input_step_form col-4">
                                <i className="fas fa-camera-retro camera_icon"></i>
                                <div className="upload_camera"></div>
                                <input type="file" onChange={this.change} value={this.state.value} id="stepImg_5" className="step_img" />
                            </form>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">5</p>
                                <div className="step_icons">
                                    <i className="step_delete_icon far fa-trash-alt" id="step_delete_icon"></i>
                                    <br />
                                    <textarea className="step_introduction" value={this.state.value} onChange={this.change} id="stepText_5" placeholder="步驟敘述..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="upload_step">
                        <div className="step_number_step d-flex">
                            {/* 步驟圖片上傳 */}
                            <form className="input_step_form col-4">
                                <i className="fas fa-camera-retro camera_icon"></i>
                                <div className="upload_camera"></div>
                                <input type="file" onChange={this.change} value={this.state.value} id="stepImg_6" className="step_img" />
                            </form>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">6</p>
                                <div className="step_icons">
                                    <i className="step_delete_icon far fa-trash-alt" id="step_delete_icon"></i>
                                    <br />
                                    <textarea className="step_introduction" value={this.state.value} onChange={this.change} id="stepText_6" placeholder="步驟敘述..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 新增步驟 */}
                <div className="input_step">
                    <button className="bubbly-button" id="new_step">新增步驟</button>
                </div>
                {/* 上傳/取消 */}
                <div className="send_buttom">
                    <button type="button" className="btn btn-outline-danger btn_mr" onClick={this.send_recipe}>上傳</button>
                    <button type="button" className="btn btn-outline-dark">取消</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Upload_header_img;

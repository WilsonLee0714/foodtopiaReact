import React, { Component } from "react";
import "./upload_header_img.scss";
import $ from "jquery";
import Upload_introduction from "./upload_introduction";

class Upload_header_img extends Component {
    constructor(props) {
        super(props)
        this.state = {
            n: 1,
            //食譜名稱
            menu:"",
            //上傳時間
            date:"",
            //圖片檔案
            selectedFile:null,
            selectedFile1:null,
            selectedFile2:null,
            selectedFile3:null,
            selectedFile4:null,
            selectedFile5:null,
            selectedFile6:null,
            //圖片檔名
            img_name:"",
            img_name_1:"",
            img_name_2:"",
            img_name_3:"",
            img_name_4:"",
            img_name_5:"",
            img_name_6:"",
            //難度時間分量簡介
            recipe_time:"",
            recipe_people:"",
            recipe_difficult:"",
            introduction:"",
            //步驟
            stepText_1:"",
            stepText_2:"",
            stepText_3:"",
            stepText_4:"",
            stepText_5:"",
            stepText_6:"",
            //食材
            ingredients_1:"",
            ingredients_2:"",
            ingredients_3:"",
            ingredients_4:"",
            ingredients_5:"",
            ingredients_6:"",
            ingredients_7:"",
            ingredients_8:"",
            //份量
            changeNum1:"",
            changeNum2:"",
            changeNum3:"",
            changeNum4:"",
            changeNum5:"",
            changeNum6:"",
            changeNum7:"",
            changeNum8:"",
            //購物車抓取編碼
            dataCar1:"",
            dataCar2:"",
            dataCar3:"",
            dataCar4:"",
            dataCar5:"",
            dataCar6:"",
            dataCar7:"",
            dataCar8:"",
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
    //圖片
    fileSelectedHandler = evt => {
        this.setState({
            selectedFile:evt.target.files[0],
        })
        this.setState({
            img_name:evt.target.files[0].name,
        })
    }
    fileSelectedHandler1 = evt => {
        this.setState({
            selectedFile1:evt.target.files[0],
        })
        this.setState({
            img_name_1:evt.target.files[0].name,
        })
    }
    fileSelectedHandler2 = evt => {
        this.setState({
            selectedFile2:evt.target.files[0],
        })
        this.setState({
            img_name_2:evt.target.files[0].name,
        })
    }
    fileSelectedHandler3 = evt => {
        this.setState({
            selectedFile3:evt.target.files[0],
        })
        this.setState({
            img_name_3:evt.target.files[0].name,
        })
    }
    fileSelectedHandler4 = evt => {
        this.setState({
            selectedFile4:evt.target.files[0],
        })
        this.setState({
            img_name_4:evt.target.files[0].name,
        })
    }
    fileSelectedHandler5 = evt => {
        this.setState({
            selectedFile5:evt.target.files[0],
        })
        this.setState({
            img_name_5:evt.target.files[0].name,
        })
    }
    fileSelectedHandler6 = evt => {
        this.setState({
            selectedFile6:evt.target.files[0],
        })
        this.setState({
            img_name_6:evt.target.files[0].name,
        })
    }   
    //食材
    change1 =(change)=>{
        this.setState({
            ingredients_1:change.value1,
            dataCar1:change.value2
        })
    }
    change2 =(change)=>{
        this.setState({
            ingredients_2:change.value1,
            dataCar2:change.value2
        })
    }
    change3 =(change)=>{
        this.setState({
            ingredients_3:change.value1,
            dataCar3:change.value2
        })
    }
    change4 =(change)=>{
        this.setState({
            ingredients_4:change.value1,
            dataCar4:change.value2
        })
    }
    change5 =(change)=>{
        this.setState({
            ingredients_5:change.value1,
            dataCar5:change.value2
        })
    }
    change6 =(change)=>{
        this.setState({
            ingredients_6:change.value1,
            dataCar6:change.value2
        })
    }
    change7 =(change)=>{
        this.setState({
            ingredients_7:change.value1,
            dataCar7:change.value2
        })
    }
    change8 =(change)=>{
        this.setState({
            ingredients_8:change.value1,
            dataCar8:change.value2
        })
    }
    //份量
    changeNum1=(changeNum)=>{
        this.setState({
            changeNum1:changeNum.numbers,
        })
    }
    changeNum2=(changeNum)=>{
        this.setState({
            changeNum2:changeNum.numbers,
        })
    }
    changeNum3=(changeNum)=>{
        this.setState({
            changeNum3:changeNum.numbers,
        })
    }
    changeNum4=(changeNum)=>{
        this.setState({
            changeNum4:changeNum.numbers,
        })
    }
    changeNum5=(changeNum)=>{
        this.setState({
            changeNum5:changeNum.numbers,
        })
    }
    changeNum6=(changeNum)=>{
        this.setState({
            changeNum6:changeNum.numbers,
        })
    }
    changeNum7=(changeNum)=>{
        this.setState({
            changeNum7:changeNum.numbers,
        })
    }
    changeNum8=(changeNum)=>{
        this.setState({
            changeNum8:changeNum.numbers,
        })
    }
    //送出上傳
    send_recipe = () => {
        //傳資料庫
        fetch('http://localhost:3000/upload/upload_menu_total', { 
        method: 'POST',
        mode:"cors",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            menu:this.state.menu,
            upload_time_sid:new Date().getMonth()+1,
            menu_img:this.state.img_name,
            Introduction:this.state.introduction,
            difficult:this.state.recipe_difficult,
            time:this.state.recipe_time,
            serving:this.state.recipe_people,
            step_img_1:this.state.img_name_1,
            step_img_2:this.state.img_name_2,
            step_img_3:this.state.img_name_3,
            step_img_4:this.state.img_name_4,
            step_img_5:this.state.img_name_5,
            step_img_6:this.state.img_name_6,
            step_1:this.state.stepText_1,
            step_2:this.state.stepText_2,
            step_3:this.state.stepText_3,
            step_4:this.state.stepText_4,
            step_5:this.state.stepText_5,
            step_6:this.state.stepText_6,
            name_1:this.state.changeNum1+"單位的"+this.state.ingredients_1,
            name_2:this.state.changeNum2+"單位的"+this.state.ingredients_2,
            name_3:this.state.changeNum3+"單位的"+this.state.ingredients_3,
            name_4:this.state.changeNum4+"單位的"+this.state.ingredients_4,
            name_5:this.state.changeNum5+"單位的"+this.state.ingredients_5,
            name_6:this.state.changeNum6+"單位的"+this.state.ingredients_6,
            name_7:this.state.changeNum7+"單位的"+this.state.ingredients_7,
            name_8:this.state.changeNum8+"單位的"+this.state.ingredients_8,
            dataCar1:this.state.dataCar1,
            dataCar2:this.state.dataCar2,
            dataCar3:this.state.dataCar3,
            dataCar4:this.state.dataCar4,
            dataCar5:this.state.dataCar5,
            dataCar6:this.state.dataCar6,
            dataCar7:this.state.dataCar7,
            dataCar8:this.state.dataCar8,
        }),
        }).then(() => {
           alert("上傳成功");
           window.location.assign('/new_blog')
        })
        //上傳圖片
        const formdata = new FormData();
        formdata.append('image',this.state.selectedFile,this.state.img_name);
        fetch("http://localhost:3000/upload/upload",{
            method:"POST",
            body:formdata
        }).then(function(res){
            return res.json();
        })
        // ---------------------------------------------------------
        const formdata1 = new FormData();
        formdata1.append('image',this.state.selectedFile1,this.state.img_name_1);
        fetch("http://localhost:3000/upload/upload1",{
            method:"POST",
            body:formdata1
        }).then(function(res){
            return res.json();
        })
        // ---------------------------------------------------------
        const formdata2 = new FormData();
        formdata2.append('image',this.state.selectedFile2,this.state.img_name_2);
        fetch("http://localhost:3000/upload/upload2",{
            method:"POST",
            body:formdata2
        }).then(function(res){
            return res.json();
        })
        // ---------------------------------------------------------
        const formdata3 = new FormData();
        formdata3.append('image',this.state.selectedFile3,this.state.img_name_3);
        fetch("http://localhost:3000/upload/upload3",{
            method:"POST",
            body:formdata3
        }).then(function(res){
            return res.json();
        })
        // ---------------------------------------------------------
        const formdata4 = new FormData();
        formdata4.append('image',this.state.selectedFile4,this.state.img_name_4);
        fetch("http://localhost:3000/upload/upload4",{
            method:"POST",
            body:formdata4
        }).then(function(res){
            return res.json();
        })
        // ---------------------------------------------------------
        const formdata5 = new FormData();
        formdata5.append('image',this.state.selectedFile5,this.state.img_name_5);
        fetch("http://localhost:3000/upload/upload5",{
            method:"POST",
            body:formdata5
        }).then(function(res){
            return res.json();
        })
        // ---------------------------------------------------------
        const formdata6 = new FormData();
        formdata6.append('image',this.state.selectedFile6,this.state.img_name_6);
        fetch("http://localhost:3000/upload/upload6",{
            method:"POST",
            body:formdata6
        }).then(function(res){
            return res.json();
        })
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
        console.log(this.state)
        return (
            <React.Fragment>
                <h1>分享食譜</h1>
                <div className="container d-flex">
                    <div className="upload_header container">
                        {/* 食譜名稱,食譜照上傳 */}
                        <form className="input_form_1">
                            <input className="form-control header" onChange={this.change} value={this.state.value} id="menu" type="text" placeholder="食譜名稱" aria-label="Search" />
                            <div className="totallll_img">
                                <img className="chicken_img" src={require("./img/th.png")} alt="" />
                                <div className="upload_chicken"></div>
                                <img className="line_img" src={require("./img/line_img.png")} alt="" />
                                <img className="img" src={(`http://localhost:3000/upload/${this.state.img_name}`)} alt="" />
                                <input type="file" onChange={this.fileSelectedHandler} id="menu_img" className="recipe_header_img" />
                            </div>
                            {/* 食譜時間,份量,難度 */}
                            <div className="recipe_dropdowns container d-flex">
                                <select onChange={this.change} value={this.state.value} id="recipe_time" className="select_box select_time_box col-4">
                                    <option value="0" className="select_options">時間</option>
                                    <option value="15分鐘" className="select_options">15分鐘</option>
                                    <option value="30分鐘" className="select_options">30分鐘</option>
                                    <option value="45分鐘" className="select_options">45分鐘</option>
                                    <option value="60分鐘" className="select_options">60分鐘</option>
                                </select>
                                <select onChange={this.change} value={this.state.value} id="recipe_people" className="select_box select_people_box col-4">
                                    <option value="0" className="select_options">份量</option>
                                    <option value="1人份" className="select_options">1人份</option>
                                    <option value="2人份" className="select_options">2人份</option>
                                    <option value="3人份" className="select_options">3人份</option>
                                    <option value="4人份" className="select_options">4人份</option>
                                </select>
                                <select onChange={this.change} value={this.state.value} id="recipe_difficult" className="select_box select_difficult_box col-4">
                                    <option value="0" className="select_options">難度</option>
                                    <option value="簡單" className="select_options">簡單</option>
                                    <option value="稍難" className="select_options">稍難</option>
                                    <option value="困難" className="select_options">困難</option>
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
                        <Upload_introduction change={this.change1} changeNum={this.changeNum1} />
                        <Upload_introduction change={this.change2} changeNum={this.changeNum2} />
                        <Upload_introduction change={this.change3} changeNum={this.changeNum3} />
                        <Upload_introduction  changeNum={this.changeNum4} />
                        <Upload_introduction  changeNum={this.changeNum5} />
                        <Upload_introduction  changeNum={this.changeNum6} />
                        <Upload_introduction  changeNum={this.changeNum7} />
                        <Upload_introduction  changeNum={this.changeNum8} />
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
                                <img className="imgti" src={(`http://localhost:3000/upload/${this.state.img_name_1}`)} alt="" />
                                <input type="file" onChange={this.fileSelectedHandler1}  id="stepImg_1" className="step_img" />
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
                                <img className="imgti" src={(`http://localhost:3000/upload/${this.state.img_name_2}`)} alt="" />
                                <input type="file" onChange={this.fileSelectedHandler2} id="stepImg_2" className="step_img" />
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
                                <img className="imgti"  src={(`http://localhost:3000/upload/${this.state.img_name_3}`)} alt="" />
                                <input type="file"  id="stepImg_3" className="step_img" />
                            </form>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">3</p>
                                <div className="step_icons">
                                    <i className="step_delete_icon far fa-trash-alt" id="step_delete_icon"></i>
                                    <br />
                                    <textarea className="step_introduction" value={this.state.value}  id="stepText_3" placeholder="步驟敘述..." />
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
                                <img className="imgti" src={(`http://localhost:3000/upload/${this.state.img_name_4}`)} alt="" />
                                <input type="file"  id="stepImg_4" className="step_img" />
                            </form>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">4</p>
                                <div className="step_icons">
                                    <i className="step_delete_icon far fa-trash-alt" id="step_delete_icon"></i>
                                    <br />
                                    <textarea className="step_introduction" value={this.state.value}  id="stepText_4" placeholder="步驟敘述..." />
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
                                <img className="imgti" src={(`http://localhost:3000/upload/${this.state.img_name_5}`)} alt="" />
                                <input type="file"  id="stepImg_5" className="step_img" />
                            </form>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">5</p>
                                <div className="step_icons">
                                    <i className="step_delete_icon far fa-trash-alt" id="step_delete_icon"></i>
                                    <br />
                                    <textarea className="step_introduction" value={this.state.value}  id="stepText_5" placeholder="步驟敘述..." />
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
                                <img className="imgti" src={(`http://localhost:3000/upload/${this.state.img_name_6}`)} alt="" />
                                <input type="file" id="stepImg_6" className="step_img" />
                            </form>
                            <div className="upload_number_step d-flex col-8 ">
                                <p className="step_number">6</p>
                                <div className="step_icons">
                                    <i className="step_delete_icon far fa-trash-alt" id="step_delete_icon"></i>
                                    <br />
                                    <textarea className="step_introduction" value={this.state.value}  id="stepText_6" placeholder="步驟敘述..." />
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

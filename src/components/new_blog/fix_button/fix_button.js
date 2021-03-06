import React, { Component } from "react";
import "./fix_button.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';

class Fix_button extends Component {
    constructor(props) {
      super(props)
      //修改個人社群->更新input
      this.initState = {
        id: "",
        facebook: "",
        instagram: "",
        google_plus: "",
        youtube:"",
        email:"",
    }
      this.state = {
        //上傳圖片檔案
        selectedFile: null,
        //上傳圖片檔名
        img_name:"",
        imgups:[],
        //修改個人社群
        id: "",
        facebook:"",
        instagram:"",
        google_plus:"",
        youtube:"",
        email:"",
        // communitys: [],
        // community: this.initState,
        //修改食譜
        filter_months:[],
        menus:[],
    }
}
//修改按鈕特效
click(){
    $(".fix_div").toggleClass("open");
    $(".fix_div").toggleClass("close");
    
}
// onchange圖片與檔名
fileSelectedHandler = evt => {
    //圖片檔案
    this.setState({
        selectedFile:evt.target.files[0]
    })
    //圖片名稱
    this.setState({
        img_name:evt.target.files[0].name
    })

}
//修改會員圖片
//onclick上傳圖片   圖片上傳卡會員sid輸入
fileUploadHandler = () =>{
    const formdata = new FormData();
    formdata.append('image',this.state.selectedFile,this.state.selectedFile.name);
    fetch("http://localhost:3000/imgup/upload",{
        method:"POST",
        body:formdata
    }).then(function(res){
        return res.json();
    })
    // //上傳圖片檔名
    // fetch('http://localhost:3000/imgup/upload_name', { //+sid
    //     method: 'PUT',
    //     body: JSON.stringify({img_name:this.state.img_name}),
    //     headers: new Headers({
    //         'Content-Type': 'application/json'
    //     })
    // }).then(res => res.json())
    // .then(//刷新頁面
    //     window.location.replace('http://localhost:3001/new_blog')
    // )
    fetch('http://localhost:3000/imgup/upload_name', {
        method: 'POST',
        body: JSON.stringify({img_name:this.state.img_name}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
    .then(
        window.location.replace('http://localhost:3001/new_blog')
    )
}
//修改個人社群連結
handleChange = (evt) => {
    let key = evt.target.id;
    let data = evt.target.value;
    this.setState({
        [key]: data
    })
    console.log(this.state.facebook)
}
// update = (evt) => {
//     // this.props.update(this.state);
//     evt.preventDefault();
// }
// add = (evt) => {
//     // this.props.add(this.state);
//     evt.preventDefault();
// }
// // static getDerivedStateFromProps(props, state) {
// //     if (props.modifyData.id !== state.id) {
// //         return {
// //             id: props.modifyData.id,
// //             facebook: props.modifyData.facebook,
// //             instagram: props.modifyData.instagram,
// //             google_plus: props.modifyData.google_plus,
// //             youtube: props.modifyData.youtube,
// //             email: props.modifyData.email
// //         }
// //     }
// //     return null;
// // }

//修改食譜
getfilter_months(){
    fetch("http://localhost:3000/upload/upload_date/")
    .then(res => res.json())
    .then(filter_months => this.setState({ 
        filter_months: filter_months,
    }))
}
// getMonthMenus(upload_time_sid) {
//     fetch("http://localhost:3000/month/menu/"+upload_time_sid)
//         .then(res => res.json())
//         .then(menus => this.setState({
//             menus: menus,
//         }))
// }
componentDidMount(){
    this.getfilter_months();
}
    render() {
        return (
            <React.Fragment>
                <div className="fix_div close">
                    <div className="fix_div_modify ">
                        <input type="text" className="header_modify" placeholder="請編輯歡迎用語" /><br />
                        <div className="btn_modify">修改</div>
                    </div>
                    <div className="fix_div_modify_2 ">
                        <textarea type="text" className="header_modify" placeholder="請編輯部落格簡介" /><br />
                        <div className="btn_modify">修改</div>
                    </div>
                    <div className="btn_3 d-flex ">
                        <a className="btn_modify_3" href="/up_load">上傳食譜</a>
                        <button className="btn_modify_3" data-toggle="modal" data-target="#exampleModal2" to="#">更換圖片</button>
                    </div>
                    <div className="btn_3 d-flex ">
                        <button type="button" className="btn btn-primary btn_modify_3" data-toggle="modal" data-target=".bd-example-modal-lg">修改食譜</button>
                        <button type="button" className="btn_modify_3" data-toggle="modal" data-target="#exampleModal">設定社群</button>
                    </div>
                </div>
                <div className="fix_button" onClick={this.click}>
                    <p>管理</p>
                </div>
                {/* 更改圖片上傳送頁面 */}
                <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">圖片上傳</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="facebook_link input_br">
                                    <span>選擇圖片：</span>
                                    <div className="upload_img">
                                        <input className="img_up" type="file" id="img_name" onChange={this.fileSelectedHandler}/>
                                        <button onClick={this.fileUploadHandler}>上傳</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 設定個人社群 */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">設定個人社群頁面</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="facebook_link input_br">
                                <span>Facebook：</span>
                                <div className="">
                                    <input type="text" className="input" value={this.state.facebook} onChange={this.handleChange} id="facebook" placeholder="facebook社群"/>
                                </div>
                            </div>
                            <div className="instagram_link input_br">
                                <span>Instagram：</span>
                                <div className="">
                                    <input type="text" className="input" value={this.state.instagram} onChange={this.handleChange} id="instagram" placeholder="個人instagram"/>
                                </div>
                            </div>
                            <div className="google+_link input_br">
                                <span>Google+：</span>
                                <div className="">
                                    <input type="text" className="input" value={this.state.google_plus} onChange={this.handleChange} id="google_plus" placeholder="個人google+"/>
                                </div>
                            </div>
                            <div className="youtube_link input_br">
                                <span>Youtube：</span>
                                <div className="">
                                    <input type="text" className="input" value={this.state.youtube} onChange={this.handleChange} id="youtube" placeholder="youtube頻道"/>
                                </div>
                            </div>
                            <div className="email_link input_br">
                                <span>Email：</span>
                                <div className="">
                                    <input type="email" className="input" value={this.state.email} onChange={this.handleChange} id="email" placeholder="個人email"/>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {this.props.modifyType === "add" ? 
                            <button type="button" onClick={this.add} className="btn btn-danger">
                            新增
                            </button>
                            : <button type="button" onClick={this.update} className="btn btn-danger">
                                修改
                            </button>}
                        </div>
                        </div>
                    </div>
                </div> 
                {/* 修改食譜 */}
                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            {this.state.filter_months.map(filter_month=>
                                <div key={filter_month.id}>
                                    <div data-month={filter_month.id} className="edit_month">{filter_month.total_time}</div>
                                    <Link to="/" className="edit_recipe"></Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Fix_button;
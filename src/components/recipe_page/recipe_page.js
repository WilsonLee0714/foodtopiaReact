import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import "./recipe_page.scss";
import $ from "jquery";

class Recipe_page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment:"",
      menus:[],
      nutritional_values:[],
      steps:[],
      step_imgs:[],
      ingredients:[],
      recipe_comments:[],
      nicknames:[],
      recipe_id:"",
    }
  }
  //評論上傳
  msChange = (evt) => {
    let key = evt.target.id;
    let data = evt.target.value;
    this.setState({
        [key]: data
    })
  }
  msSend = () =>{
    fetch('http://localhost:3000/api/comment_upload', { 
      method: 'POST',
      mode:"cors",
      credentials: 'include',
      headers: new Headers({
          'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        comment:this.state.comment,
        recipe_id:this.state.recipe_id,
      }),
    }).then(() => {
        this.setState({comment:""})
        this.getRecipe_comments(this.state.recipe_id);
    })
  }
  //食譜內頁各筆資訊
  //簡介
  getMenus(id) {
    fetch("http://localhost:3000/update/menu/"+id)
        .then(res => res.json())
        .then(menus => this.setState({
            menus: menus,
        }))
  };
  //營養資訊
  getNutritional_value(id) {
    fetch("http://localhost:3000/update/nutritional_value/"+id)
        .then(res => res.json())
        .then(nutritional_values => this.setState({
          nutritional_values: nutritional_values,
        }))
  };
  //步驟
  getStep(id) {
    fetch("http://localhost:3000/update/step/"+id)
        .then(res => res.json())
        .then(steps => this.setState({
          steps: steps,
        }))
  };
  //步驟圖
  getStep_img(id) {
    fetch("http://localhost:3000/update/step_img/"+id)
        .then(res => res.json())
        .then(step_imgs => this.setState({
          step_imgs: step_imgs,
        }))
  };
  //食材圖
  getIngredients(id) {
    fetch("http://localhost:3000/foodtopia/ingredients/"+id)
        .then(res => res.json())
        .then(ingredients => this.setState({
          ingredients: ingredients,
        }))
  };
  //食譜系統下的評論
  getRecipe_comments(id) {
    fetch("http://localhost:3000/api/recipe_comment/"+id)
        .then(res => res.json())
        .then(recipe_comments => this.setState({
          recipe_comments: recipe_comments,
        }))
  };
  //抓session會員nickname
  getCommunitys = () => {
    fetch("http://localhost:3000/api/nickname_comment", {  
        method: 'GET',
        mode:"cors",
        credentials: 'include',})
    .then(res => res.json())
    .then(nicknames => this.setState({ 
      nicknames:nicknames,
    }))
}

  allAddCart = (evt) => {
    evt.preventDefault();
    fetch("http://localhost:3000/cart/allAddCart", {
      method: 'POST',
      mode: "cors",
      credentials: 'include',
      headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({products: this.state.ingredients})
      })
      .then(res => res.json())
      .then(message => console.log(message))
      .then(() => this.props.getCart())
  }

  componentDidMount(){
    //評論create item
    // $(".comment_send").on('click',function(){
    //   var newitem = `<main class="comment_wrap d-flex container">    
    //                   <img class="profile_pic" src={require("./images/foodtopia_profile_pic.png")} />
    //                   <div class="comment_area">
    //                     <span class="user_name"> Foodtopia</span>
    //                     <span class="comment_time"> 2018-10-05 19:59</span>   
    //                     <div class="comment_text">想問一下現做沒吃完的話怎麼保存？ 常溫不冰的話幾天內吃完比較ok?</div>
    //                   </div>
    //                 </main>`
      
    //   $('.comment_wrap_all').append(newitem);
    // })
    //食譜單筆資料
    let id = this.props.match.params.id
    this.setState({recipe_id:this.props.match.params.id})

    this.getMenus(id);
    this.getNutritional_value(id);
    this.getStep(id);
    this.getStep_img(id);
    this.getIngredients(id);
    this.getRecipe_comments(id);
    this.getCommunitys();
}

  render() {
    return (
      // <BrowserRouter>
        <React.Fragment>
          {/* ----主要資訊(灰底) header----- */}
          <main className="head_bg">
            <div className=" container d-flex header1">
              {this.state.menus.map(menu =>
                  <img key={menu.id} className="main_pic" src={require(`./images/${menu.menu_img}.jpg`)}/>
                )}
                <div className="main_text">
                  <div className="main_title d-flex">
                    {/* ---食譜標題--- */}
                    {this.state.menus.map(menu =>
                      <h1 key={menu.id} className="recipe_tittle">{menu.menu}</h1>
                    )}
                    {/* ---收藏--- */}
                    <div className="like_btn d-flex justify-content-center">
                      <img className="like_img" src={require('./images/like.svg')}/>
                      <img className="liked_img" src={require('./images/liked.svg')}/>
                      <div className="like_text">收藏</div>
                    </div>
                  </div>
                    {/* ---食譜簡介--- */}
                    {this.state.menus.map(menu =>
                      <p key={menu.id} className="recipe_intro">{menu.Introduction}</p>
                    )}
                    {this.state.menus.map(menu =>
                    <div key={menu.id} className="cook_info_wrap d-flex">
                        {/* --食譜圓標籤-- */}
                        <div className="cook_info ">
                            <img className="info_icon time" src={require('./images/clock.svg')}/>
                            <p className="info_text">{menu.time}</p>
                        </div>
                        <div className=" cook_info ">
                            <img className="info_icon level" src={require('./images/chef.svg')}/>
                            <p className="info_text">{menu.difficult}</p>
                        </div>
                        <div className=" cook_info ">
                            <img className="info_icon portion" src={require('./images/dinner.svg')}/>
                            <p className="info_text">{menu.serving}</p>
                        </div>
                    </div>
                     )}
                    {/* ---- 營養資訊 nutrition ---- */}
                    <main className="nutrition_wrap container">
                      <table className="nutrition_table table table-bordered table-sm">
                        <thead>
                          <tr>
                            <th className="n_th" scope="col">能量</th>
                            <th className="n_th" scope="col">卡路里</th>
                            <th className="n_th" scope="col">脂肪</th>
                            <th className="n_th" scope="col">飽和脂肪</th>
                            <th className="n_th" scope="col">碳水化合物</th>
                            <th className="n_th" scope="col">糖</th>
                            <th className="n_th" scope="col">膳食纖維</th>
                            <th className="n_th" scope="col">蛋白質</th>
                            <th className="n_th" scope="col">膽固醇</th>
                            <th className="n_th" scope="col">鈉</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.nutritional_values.map(nutritional_value =>
                            <tr key={nutritional_value.id}>
                              <td scope="row">{nutritional_value.value_1}</td>
                              <td>{nutritional_value.value_2}</td>
                              <td>{nutritional_value.value_3}</td>
                              <td>{nutritional_value.value_4}</td>
                              <td>{nutritional_value.value_5}</td>
                              <td>{nutritional_value.value_6}</td>
                              <td>{nutritional_value.value_7}</td>
                              <td>{nutritional_value.value_8}</td>
                              <td>{nutritional_value.value_9}</td>
                              <td>{nutritional_value.value_10}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </main>
                </div>
            </div>
          </main>
          
          <section className="middle_part container d-flex justify-content-between">
            {/* ----- 所需食材ingredients ------- */}
            <main className="ingredients_wrap">
              <p className="i_title">所需食材</p>
              {/* <span >共2人份</span> */}
              <div className="ingredients flex-wrap">
                <div className="ingredient row">
                  {this.state.ingredients.map(ingredient=>
                  <div key={ingredient.id} className="ingredient_total d-flex col-4">
                      <img className="ingredient_pic col-7" src={require(`./images/${ingredient.ingredients_img}.jpg`)}/>
                      <p className="i_qty col-5">{ingredient.ingredients_name}</p>
                  </div>
                  )}
                </div>
              </div>
            </main>
            {/* ---生成食材清單add2cart--- */}
            <main className="add2cart flex-row align-items-center">
              <p className="add2cart_title">購買食譜相關食材</p>
              <div className="btn btn-info add2cart_btn" onClick={this.allAddCart}>所有食材加入購物車</div>
              <p className="add2cart_24h">新鮮食材24小時送達</p>
            </main>
          </section>

          {/* ---步驟 steps--- */}
          <main className="steps-wrap">
            <div className="step d-flex justify-content-center">
              <span className="step_num">01</span>
              {this.state.step_imgs.map(step_img=>
                <span className="step_pic"><img src={require(`./images/${step_img.step_img_1}.jpg`)}/></span>
              )}
              {this.state.steps.map(step=>
                <span className="detail">{step.step_1}</span>
              )}
            </div> 
            <div className="step d-flex justify-content-center">
              <span className="step_num">02</span>
              {this.state.step_imgs.map(step_img=>
                <span className="step_pic"><img src={require(`./images/${step_img.step_img_2}.jpg`)}/></span>
              )}
              {this.state.steps.map(step=>
                <span className="detail">{step.step_2}</span>
              )}            
            </div> 
            <div className="step d-flex justify-content-center">
              <span className="step_num">03</span>
              {this.state.step_imgs.map(step_img=>
                <span className="step_pic"><img src={require(`./images/${step_img.step_img_3}.jpg`)}/></span>
              )}
              {this.state.steps.map(step=>
                <span className="detail">{step.step_3}</span>
              )}            
            </div> 
            <div className="step d-flex justify-content-center">
              <span className="step_num">04</span>
              {this.state.step_imgs.map(step_img=>
                <span className="step_pic"><img src={require(`./images/${step_img.step_img_4}.jpg`)}/></span>
              )}
              {this.state.steps.map(step=>
                <span className="detail">{step.step_4}</span>
              )}
            </div> 
            <div className="step d-flex justify-content-center">
              <span className="step_num">05</span>
              {this.state.step_imgs.map(step_img=>
                <span className="step_pic"><img src={require(`./images/${step_img.step_img_5}.jpg`)}/></span>
              )}
              {this.state.steps.map(step=>
                <span className="detail">{step.step_5}</span>
              )}
            </div> 
            <div className="step d-flex justify-content-center">
              <span className="step_num">06</span>
              {this.state.step_imgs.map(step_img=>
                <span className="step_pic"><img src={require(`./images/${step_img.step_img_6}.jpg`)}/></span>
              )}
              {this.state.steps.map(step=>
                <span className="detail">{step.step_6}</span>
              )}
            </div> 
          </main>

          {/* ---作者資訊 author--- */}
          <main className="author_wrap container d-flex justify-content-center">
            <img className="profile_pic" src={require("./images/foodtopia_profile_pic.png")} />
            <div className="author_text">
              <div className="author_name">作者:</div>
              <div className="author_name"> Foodtopia官方小編</div>
              <div className="author_intro">懶得想要吃什麼?來foodtopia找就對了!</div>
            </div>
            
          </main>

          {/* ---推薦食譜 recommendation--- */}
          <main className="recommendation_wrap">
            <div className="p_slider_wrap container d-flex align-items-center">
                <div className="category_wrap container">
                    <div className="category_title">你可能也會喜歡</div>
                    <div className="cards d-flex">
                        <div className="p_card">
                            <div className="upper_card">
                                <img className="card_pic" src ={require("./images/card_pic.jpg")}/>
                                <div className="rate">4.2</div>
                            </div>
                            <div className="lower_card">
                                <div className="card_title ">蒜香牛小排</div>
                                <div className="card_text ">15分鐘完成一道健康美味又簡單的料理!</div>
                                <img className="like_btn" src={require("./images/like.svg")}/>
                                <img className="share_btn" src={require("./images/share.svg")}/>
                            </div>
                        </div> 
                        <div className="p_card">
                            <div className="upper_card">
                                <img className="card_pic" src ={require("./images/card_pic.jpg")}/>
                                <div className="rate">4.2</div>
                            </div>
                            <div className="lower_card">
                                <div className="card_title ">蒜香牛小排</div>
                                <div className="card_text ">15分鐘完成一道健康美味又簡單的料理!</div>
                                <img className="like_btn" src={require("./images/like.svg")}/>
                                <img className="share_btn" src={require("./images/share.svg")}/>
                            </div>
                        </div>
                        <div className="p_card">
                            <div className="upper_card">
                                <img className="card_pic" src ={require("./images/card_pic.jpg")}/>
                                <div className="rate title1">4.2</div>
                            </div>
                            <div className="lower_card">
                                <div className="card_title ">蒜香牛小排</div>
                                <div className="card_text ">15分鐘完成一道健康美味又簡單的料理!</div>
                                <img className="like_btn" src={require("./images/like.svg")}/>
                                <img className="share_btn" src={require("./images/share.svg")}/>
                            </div>
                        </div>
                        <div className="p_card">
                            <div className="upper_card">
                                <img className="card_pic" src ={require("./images/card_pic.jpg")}/>
                                <div className="rate title1">4.2</div>
                            </div>
                            <div className="lower_card">
                                <div className="card_title ">蒜香牛小排</div>
                                <div className="card_text ">15分鐘完成一道健康美味又簡單的料理!</div>
                                <img className="like_btn" src={require("./images/like.svg")}/>
                                <img className="share_btn" src={require("./images/share.svg")}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
          </main>

          {/* ---評論 comment--- */}
          
          <div className="comment_wrap_all">
          {this.state.recipe_comments.map(recipe_comment=>
            <div className="comment_recipe">
              <main className="comment_wrap d-flex container">
                <img className="profile_pic" src={require("./images/foodtopia_profile_pic.png")} />
                <div className="comment_area">
                  <span className="user_name">{recipe_comment.comment_name}</span>
                  <div className="comment_text">{recipe_comment.comment}</div>
                </div>
              </main>
            </div>
          )}
            <main className="comment_wrap d-flex container">
              <img className="profile_pic" src={require("./images/foodtopia_profile_pic.png")} />
              <div className="comment_area">
              {this.state.nicknames.map(nickname=>
                <span className="user_name">{nickname.nick_name}</span>
              )}
                <div className="d-flex align-items-end">
                  <textarea className="comment_input" placeholder="請在這裡輸入您對這個食譜的想法!" id="comment" value={this.state.comment} onChange={this.msChange}></textarea>
                  <button className="comment_send btn btn-primary" onClick={this.msSend}>送出</button>
                </div>
              </div>
            </main>
          </div>
        </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default Recipe_page;
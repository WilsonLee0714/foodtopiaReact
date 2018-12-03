import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'

import recipes from './recipe_data'
import "./react_search.scss";
// import menus from "../../recipe.json";



class React_search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      // menus: menus //設定初始值menus為引入的menus json檔
      menus: []
      
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
  
  render () {
    const KEYS_TO_FILTERS = this.state.menus.menu
    const filteredRecipes = this.state.menus.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div className="container"> 
        <SearchInput
              type="text"
              className="form-control search-input"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={this.searchUpdated}
              placeholder="請輸入食譜關鍵字"
              />

        <div className="cards d-flex flex-wrap">
          {/* <SearchInput className="search-input" onChange={this.searchUpdated} /> */}
          {filteredRecipes.map(menu => {
            return (
              <div className="p_card">
                <div className="upper_card">
                  <img className="card_pic" src={require(`../product_slider/images/${menu.menu_img}.jpg`)} />
                </div>  
                
                <div className="lower_card">
                   <div className="search_result card_title title2">{menu.menu}</div>
                   <div className="card_text text ">{menu.Introduction}</div>
                  
                  
                 </div>
               </div>
          
          )
        })}
        </div>
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
  componentDidMount(){
    this.getMenus();
  }
  //call restful api
  getMenus(){
    fetch("http://localhost:3000/api/recipe/")
    .then(res=>res.json())
    .then(menus => this.setState({
        menus: menus
    }))
  }
}

export default React_search;
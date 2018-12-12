import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./day_rank.scss";
import menus from "./rank.json";


class Day_rank extends Component {
    constructor(props) {
        super(props);
        this.state={
            menus: menus
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="rank_wrap">
                    <div className="rank_title">
                        <img className="rank_crown" src={require(`./images/crown.svg`)} />
                        <span>熱門排行榜</span>
                    </div>
                    <div className="rank_items d-flex flex-column justify-content-center align-items-center">
                        {this.state.menus.map(menu => 
                            <div className="rank_item">
                                {/* <img className="rank_crown" src={require(`./images/crown.svg`)} /> */}
                                <span className="rank_num ">{menu.rank}</span>
                                <div className="rank_item_txt">
                                    <div className="rank_item_title">{menu.menu}</div>
                                    <div className="item_text">{menu.Introduction}</div>
                                </div>
                                <div>
                                <Link to={`/page/${menu.id}`} >
                                    <img className="rank_thumbnail" src={require(`../product_slider/images/${menu.menu_img}.jpg`)}/>
                                </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
      }
    }

export default Day_rank;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./recommend.scss";



class Recommend extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <React.Fragment>
              <div className="container ">            
                <div className="recm_wrap">
                  <p className="recm_title">每日推薦</p>
                  {/* <Link to="/recipe_page"> */}
                    <div className="recipe_wrap">
                      <img src={require('./images/recm_recipe.jpg')} />
                    </div>
                  {/* </Link> */}
                </div>
              </div>
          </React.Fragment>
        );
      }
    }

export default Recommend;
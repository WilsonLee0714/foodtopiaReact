import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Ingredient_nav from "../igr_homepage/ingredient_nav/Ingredient_nav";


class Ingridient_listpage extends React.Component {
  render() {
    return (
        <React.Fragment>
          <div className="container">
          <Ingredient_nav/>
          </div>   
        </React.Fragment>
    )
  }
}

export default Ingridient_listpage;
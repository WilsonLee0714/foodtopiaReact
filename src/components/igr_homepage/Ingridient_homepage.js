import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Ingredient_main from "./ingredient_main/Ingredient_main";
import Ingredient_nav from "./ingredient_nav/Ingredient_nav";
import Ingredient_middlecontent from "./ingredient_middlecontent/Ingredient_middlecontent";
import Ingredient_list from "./ingredient_list/Ingredient_list";
import Ingredient_active from "./ingredient_active/Ingredient_active";
import Ingredient_recipes from "./ingredient_recipes/Ingredient_recipes";
import Ingredient_finalimg from "./ingredient_finalimg/Ingredient_finalimg";


class Ingridient_homepage extends Component {
  render() {
    return (
        <React.Fragment>
            <Ingredient_nav/>
            <Ingredient_main/>
            <Ingredient_middlecontent/>
            <Ingredient_list/>
            <Ingredient_active/>
            <Ingredient_recipes/>
            <Ingredient_list/>
            <Ingredient_finalimg/>                
        </React.Fragment>
    );
  }
}
export default Ingridient_homepage;
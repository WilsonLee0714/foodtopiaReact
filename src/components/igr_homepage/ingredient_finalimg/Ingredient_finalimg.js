import React, { Component } from 'react';
import './Ingredient_finalimg.scss';
import { Link } from "react-router-dom";

class Ingredient_finalimg extends Component {
  render() {
    return (
    <React.Fragment>
      {/* <div className="sec8">
      <p>Lorem ipsum dolor sit amet.</p>
      <button>Ahead Recipies</button>
      </div> */}
      <div className='sFotter d-flex justify-content-center align-items-center thirdWrap'>
          <div className='smallBox1 '>
              <div className='text-center pt-4 pb-3'>最齊全的食譜種類<br />最便捷的食材採買服務</div>
              <div className='text-center'>
              <Link to='/recipe_head/recipe_list'><button type='button' style={{ borderRadius: '20px' }} className='w-50 btn btn-danger'>前往食譜</button></Link>
              </div>
          </div>
      </div>
    </React.Fragment>
    ) 
  }
}
export default Ingredient_finalimg;
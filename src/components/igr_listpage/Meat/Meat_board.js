import React, { Component } from 'react';

class Meat_board extends Component {

  constructor(props){
    super(props);
  }

  render() {

      return (
        <React.Fragment>
          <div className="board_sec container">
            <img src={require(`../igr_img/${this.props.match.params.pic}.jpg`)} alt="oops" />

            <div className="board_right">
              <h2>{this.props.match.params.id}</h2>
              <p>價格{this.props.match.params.it}</p>
              <p>Foodtopia提供你最新鮮及多樣化的產品</p>
              <img className="icon" src={require('./image/shopping-bag.png')} onClick={this.cartToggle} />
              <button type="button" class="btn btn-info">加入購物車</button>
            </div>
          </div>  
        </React.Fragment>
      )
    }
  }
    
  export default Meat_board;
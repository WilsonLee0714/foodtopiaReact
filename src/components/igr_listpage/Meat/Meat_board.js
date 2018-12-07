import React, { Component } from 'react';

class Meat_board extends Component {

  constructor(props){
    super(props);
  }

  render() {

      return (
        <React.Fragment>
          <div className="board_sec container">
            <img src={require(`../igr_img/${this.props.match.params.ipimg}.jpg`)} alt="oops" />

            <div className="board_right">
            <h2>{this.props.match.params.ipname}</h2>
                <p>{this.props.match.params.ipid}</p>
                <p>{this.props.match.params.iprice}</p>
                <p>{this.props.match.params.ispec}</p>
              <img className="icon" src={require('./image/shopping-bag.png')} onClick={this.cartToggle} />
              <button type="button" class="btn btn-info">加入購物車</button>
            </div>
          </div>  
        </React.Fragment>
      )
    }
  }
    
  export default Meat_board;
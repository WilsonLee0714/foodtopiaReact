import React from "react";
import './Sec3_4.scss';

class Sec3_4 extends React.Component {
  render() {
    return(
    <React.Fragment>
    <div className="sec3_4">
      <div className="sec3_4_container">
        <div className="sec3">        
          <h2>限時特價</h2>
          <div className="sec3_card_sec">
            <div className="sec3_card_item">
              <img src={require("./image/test17.jpeg")} alt />
              <div>
                <h4>項目名稱</h4>
                <div className="cardprice_bar">
                  <img src={require("./image/test7.jpg")} alt />
                  <p>1280</p>
                </div>
              </div>
            </div>
            <div className="sec3_card_item">
              <img src={require("./image/test17.jpeg")} alt />
              <div>
                <h4>項目名稱</h4>
                <div className="cardprice_bar">
                  <img src={require("./image/test7.jpg")} alt />
                  <p>1280</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sec3_card_sec">
            <div className="sec3_card_item">
              <img src={require("./image/test17.jpeg")} alt />
              <div>
                <h4>項目名稱</h4>
                <div className="cardprice_bar">
                  <img src={require("./image/test7.jpg")} alt />
                  <p>1280</p>
                </div>
              </div>
            </div>
            <div className="sec3_card_item">
              <img src={require("./image/test17.jpeg")} alt />
              <div>
                <h4>項目名稱</h4>
                <div className="cardprice_bar">
                  <img src={require("./image/test7.jpg")} alt />
                  <p>1280</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec4">
          <div className="sec4_event1">
            <a href>
              <h3>活動項目</h3>
              <p>活動內容</p>
            </a>
          </div>
          <div className="sec4_event2">
            <a href>
              <h3>活動項目</h3>
              <p>活動內容</p>    
            </a>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
    )
  }

}

export default Sec3_4;
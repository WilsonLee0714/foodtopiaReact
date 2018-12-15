import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col
} from 'reactstrap';
import '../../igr_listpage/Ingridient_listpage.scss';

class Ingredient_list extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="bg_container">
          <h2>產地直送</h2>
          <Row className="card_sec">
            <Col className="card_item">
              <Col className='card_img'>
                <img className='img-fluid' src={require('../../igr_listpage/igr_img/PG5113.jpg')} alt/>
              </Col>
              <Col className='card_name'>
                <h3>紅肉火龍果</h3>
              </Col>
              <Col className="card_linebar">
                <span className='card_price'>NT$ 59</span>
                <span>
                  <h5>查看更多</h5>
                </span>
              </Col >
              <Col className='card_spec'>
                新鮮直送，嚴格把關，果肉甜美
              </Col>
            </Col>

            <Col className="card_item">
              <Col className='card_img'>
                <img className='img-fluid' src={require('../../igr_listpage/igr_img/PG6828.jpg')} alt/>
              </Col>
              <Col className='card_name'>
                <h3>紫高麗菜</h3>
              </Col>
              <Col className="card_linebar">
                <span className='card_price'>NT$ 89</span>
                <span>
                  <h5>查看更多</h5>
                </span>
              </Col >
              <Col className='card_spec'>
                口感清脆新鮮
              </Col>
            </Col>

            <Col className="card_item">
              <Col className='card_img'>
                <img className='img-fluid' src={require('../../igr_listpage/igr_img/PG4116.jpg')} alt/>
              </Col>
              <Col className='card_name'>
                <h3>吻仔魚</h3>
              </Col>
              <Col className="card_linebar">
                <span className='card_price'>NT$ 79</span>
                <span>
                  <h5>查看更多</h5>
                </span>
              </Col >
              <Col className='card_spec'>
                保最鮮海味肉質鮮甜，Q彈好嚼勁
              </Col>
            </Col>
          </Row>

          <h2>暖冬食材</h2>
          <Row className="card_sec">
            <Col className="card_item">
              <Col className='card_img'>
                <img className='img-fluid' src={require('../../igr_listpage/igr_img/PG6204.jpg')} alt/>
              </Col>
              <Col className='card_name'>
                <h3>南瓜</h3>
              </Col>
              <Col className="card_linebar">
                <span className='card_price'>NT$ 65</span>
                <span>
                  <h5>查看更多</h5>
                </span>
              </Col >
              <Col className='card_spec'>
                口感清脆，低熱量又高纖的高飽足
              </Col>
            </Col>

            <Col className="card_item">
              <Col className='card_img'>
                <img className='img-fluid' src={require('../../igr_listpage/igr_img/PG1506.jpg')} alt/>
              </Col>
              <Col className='card_name'>
                <h3>去骨雞腿肉</h3>
              </Col>
              <Col className="card_linebar">
                <span className='card_price'>NT$ 67</span>
                <span>
                  <h5>查看更多</h5>
                </span>
              </Col >
              <Col className='card_spec'>
                慢活自然熟成，屠宰衛生，肉質鮮美
              </Col>
            </Col>

            <Col className="card_item">
              <Col className='card_img'>
                <img className='img-fluid' src={require('../../igr_listpage/igr_img/PG3102.jpg')} alt/>
              </Col>
              <Col className='card_name'>
                <h3>中華雞蛋豆腐</h3>
              </Col>
              <Col className="card_linebar">
                <span className='card_price'>NT$ 23</span>
                <span>
                  <h5>查看更多</h5>
                </span>
              </Col >
              <Col className='card_spec'>
                非基改，堅持真材實料
              </Col>
            </Col>
          </Row>
            <h2>節慶食材</h2>
          <Row className="card_sec">
            <Col className="card_item">
              <Col className='card_img'>
                <img className='img-fluid' src={require('../../igr_listpage/igr_img/PG1101.jpg')} alt/>
              </Col>
              <Col className='card_name'>
                <h3>牛肉切丁</h3>
              </Col>
              <Col className="card_linebar">
                <span className='card_price'>NT$ 250</span>
                <span>
                  <h5>查看更多</h5>
                </span>
              </Col >
              <Col className='card_spec'>
                肉質軟嫩富彈性,口感鮮嫩多汁
              </Col>
            </Col>

            <Col className="card_item">
              <Col className='card_img'>
                <img className='img-fluid' src={require('../../igr_listpage/igr_img/PG1503.jpg')} alt/>
              </Col>
              <Col className='card_name'>
                <h3>土雞</h3>
              </Col>
              <Col className="card_linebar">
                <span className='card_price'>NT$ 425</span>
                <span>
                  <h5>查看更多</h5>
                </span>
              </Col >
              <Col className='card_spec'>
                無生長激素，慢活自然熟成
              </Col>
            </Col>

            <Col className="card_item">
              <Col className='card_img'>
                <img className='img-fluid' src={require('../../igr_listpage/igr_img/PG4128.jpg')} alt/>
              </Col>
              <Col className='card_name'>
                <h3>特大鮮甜明蝦</h3>
              </Col>
              <Col className="card_linebar">
                <span className='card_price'>NT$ 1988</span>
                <span>
                  <h5>查看更多</h5>
                </span>
              </Col >
              <Col className='card_spec'>
                肉質結實且富有彈性
              </Col>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }

}

export default Ingredient_list;
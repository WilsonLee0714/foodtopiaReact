import React, { Component } from 'react';


class Select_filter_box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upload_ingredients: [],
            value: "",
            categoryId: this.props.categoryId,
        }
    }
    change = (event) => {

        this.setState({
            value: event.target.value,
        })
    }
    //取小分類
    getUpload_ingredients(sid) {
        fetch("http://localhost:3000/upload/upload_ingredients/" + sid)
            .then(res => res.json())
            .then(upload_ingredients => this.setState({
                upload_ingredients: upload_ingredients,
            }))
    }
    //第一筆
    componentDidMount() {
        var sid = this.state.categoryId;
        this.getUpload_ingredients(sid)
    }
    //更新 -> this.state.categoryId
    static getDerivedStateFromProps(props, state) {
        if (props.categoryId !== state.categoryId) {
            return {
                categoryId: props.categoryId,
            }
        }
        return null;
    }
    //頁面更新 -> 吃更新過後的categoryId
    componentDidUpdate(prevProps) {
        if (this.props.categoryId !== prevProps.categoryId) {
            this.getUpload_ingredients(this.props.categoryId)
        }
    }
    render() {
        return (
            <React.Fragment>
                <select onChange={this.change} value={this.state.value} className="select_box select_items_box">
                    <option value="0">請選擇</option>
                    {this.state.upload_ingredients.map((upload_ingredient) => {
                        let opt = <option key={upload_ingredient.id} value={upload_ingredient.id}>
                            {upload_ingredient.ingredients_small_filter}
                        </option>;
                        return opt;
                    })}
                </select>
            </React.Fragment>
        );
    }
}

export default Select_filter_box;
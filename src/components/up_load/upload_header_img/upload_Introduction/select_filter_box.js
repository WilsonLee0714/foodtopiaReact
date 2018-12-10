import React, { Component } from 'react';


class Select_filter_box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            upload_ingredients_names: [],
        }
    }
    //篩選食材
    change = (event) => {
        // console.log(event.target.value)
        this.setState({ value: event.target.value });
        this.props.changeHandler(event.target.value);
    }
    //取大分類
    getUpload_ingredients_names() {
        fetch("http://localhost:3000/upload/upload_ingredients_name/")
            .then(res => res.json())
            .then(upload_ingredients_names => this.setState({
                upload_ingredients_names: upload_ingredients_names,
            }))
    }
    componentDidMount() {
        this.getUpload_ingredients_names();
    }
    render() {
        return (
            <React.Fragment>
                <select onChange={this.change} value={this.state.value} className="select_box select_filter_box">
                    {this.state.upload_ingredients_names.map((upload_ingredients_name) => {
                        let opt = <option key={upload_ingredients_name.id} value={upload_ingredients_name.id} className="select_options">
                            {upload_ingredients_name.upload_ingredients_name}
                        </option>;
                        return opt;
                    })}
                </select>
            </React.Fragment>
        );
    }
}

export default Select_filter_box;
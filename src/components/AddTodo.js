import React, { Component } from "react";
import PropTypes from 'prop-types';

class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }   
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    }
    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                    className="add-todo-input"
                />
                <button type="submit" className="add-todo-btn">submit</button>
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
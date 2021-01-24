import React, { Component } from "react";
import PropTypes from "prop-types";


class TodoItem extends Component {

    getStyle() {
        const { completed } = this.props.todo;
        return {
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px dotted #cccccc",
            textDecoration: completed ? "line-through" : "none",
            color: completed ? "#cccccc": "#000000",
            fontStyle: completed ? "italic": "initial"
        }
    }
    render() {
        const { id, title, } = this.props.todo;
        return(
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}
                    /> { " " } 
                     { title }
                    <button type="button" class="del-btn" onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

// Proptypes
TodoItem.propType = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default TodoItem;
import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
    render() {
        return this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>)
    }
}

// Proptypes: Prop validation that a component should have. A record of the types of prop(s) that can be passed down to components     
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todos;
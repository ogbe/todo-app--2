import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./Todos";
import Header from "./layout/Header";
import AddTodo from "./AddTodo";
import uuid from "uuid";
import About from "./pages/About";
import Axios from "axios";

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }

        this.markComplete = this.markComplete.bind(this);
        this.delTodo = this.delTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(res => this.setState({ todos: res.data }))
    }

    markComplete(id) {
        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })})

        // Using Prevstate, modifying state indirectly
        // this.setState(prevState => {
        //     const updatedTodos = prevState.todos.map(todo => {
        //         if(todo.id === id) {
        //             todo.completed = !todo.completed
        //         }
        //         return todo;
        //     })
        //     return {todos: updatedTodos}
        // })
    }

    delTodo(id) {
        if(confirm("Do you wish to delete this todo?")) {
            Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res =>  this.setState({ todos: [...this.state.todos.filter(todo => 
                todo.id !== id
            )] }))
        }
       
    }

    addTodo(title) {
        Axios.post("https://jsonplaceholder.typicode.com/todos", {
            title,
            completed: false
        })
        .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    }
    
    render() {
        return(
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos
                                todos={ this.state.todos }
                                markComplete={this.markComplete}
                                delTodo={this.delTodo}
                            />
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        )
    }
}

export default App;
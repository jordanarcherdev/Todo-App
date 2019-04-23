import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import todoapi from '../apis/todoapi';


class App extends React.Component {
  state = { todos: [] };

  componentDidMount(){
    this.getTodos();
  }

  getTodos = async () => {
    const response = await todoapi.get('/api/todos/');

    this.setState({todos: response.data})

  }

  onSubmit = async (todo) => {
    const response = await todoapi.post('/api/todos', todo);

    let todoArr = this.state.todos;
    todoArr.unshift(response.data);

    this.setState({todos: todoArr});
  }

  onDeleteClick = (todo) => {
    todoapi.delete(`/api/todos/${todo._id}`)

    let removeTodo = this.state.todos.map((todo) => {return todo._id}).indexOf(todo._id);
    let todoArr = this.state.todos;
    todoArr.splice(removeTodo, 1);

    this.setState({todos: todoArr});

  }

  render(){
    return(
      <div className="ui center aligned container">
        <br></br>
        <h1 className="ui header">
          <i className="wrench icon"></i>
            ToDo List
        </h1>

        <AddTodo onSubmit={this.onSubmit} />
        <TodoList onDeleteClick={this.onDeleteClick} todos={this.state.todos} />
      </div>
    );
  }

}

export default App;

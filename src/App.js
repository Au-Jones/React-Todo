import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state




// task
// ID
// completed



class App extends React.Component {
  constructor() {
    super();
    this.state = {

      todolist: [{
        Task: "Bathe Dogs",
        ID: Date.now(),
        Completed: false
      }],
      task: ""
    }
  }


  changeHandler = (e) => {
    this.setState({
      Task: e.target.value
    })
  }

  addTask = (e) => {
    e.preventDefault();
    const todolist = this.state.todolist.slice();
    todolist.push({
      task: this.state.task,
      id: Date.now(),
      completed: false
    });

    this.setState({
      todolist: todolist,
      task: ""
    })
  }

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <ToDoList
          task={this.state.todolist}
        />

        <TodoForm
          addTask={this.addTask}
          changeHandler={this.ChangeHandler}
          value={this.state.task}
        />
      </div>
    );
  }
}

export default App;

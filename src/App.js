import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
// task
// ID
// completed

const tasks = [
 {
  Task: "Bathe Dogs",
  ID: 1,
  Completed: false
 },
 {
  Task: "Take out garbage",
  ID: 2,
  Completed: false
 },
 {
Task: "Wash Dishes",
ID: 3,
Completed: false
 },
]

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      TodoList: tasks,
      Task:"",
      ID:"",
      Completed:""
    };
  }


  changeHandler = (e) => {
    this.setState({
      [e.target.Task]: e.target.value
    });
  };

  addTask = (e) => {
    e.preventDefault();
    this.setState({
      TodoList:[
        ...this.state.TodoList,
        {
          Task: this.state.Task,
          ID: this.state.ID,
          Completed: this.state.Completed
        }
      
      ],
      Task: "",
      ID: "",
      Completed: ""
    });
  };

  render() {
    return(
      <div>
        <h1>ToDo List</h1>
        <TaskList TodoList={this.state.TodoList} />
        <TodoForm
        addTask={this.addTask}
        changeHandler={this.ChangeHandler}
        Task={this.state.Task}
        ID={this.state.ID}
        Completed={this.state.Completed}
        />
      </div>
    );
  }
}



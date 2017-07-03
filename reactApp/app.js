import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <form className="inputline">
        <input type="text"/>
        <input type="submit" value="Add todo item"/>
      </form>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    // var isComplete = function(task) {
    //   if (task) {
    //     return {'text-decoration': 'line-through'};
    //   }
    // }

    var isCompleted = function(task) {
      if (task.completed) {
        return <li><button type="button">X</button><strike>{task.taskText}</strike></li>
      } else {
        return <li><button type="button">X</button>{task.taskText}</li>
      }
    }

    return (
      <ul>
        {isCompleted(this.props.task)}
      </ul>
    )
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="todolist">
        <h3>Todo List</h3>
        <ul>
          {this.props.todos.map((task)=><Todo task={task}/>)}
        </ul>
      </div>
    )
  }
}

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState ({
      todos:todos
    })
  }

  render(){
    return (
      <div className="container">
        <InputLine  />
        <ToDoList todos={this.state.todos} />
      </div>
    )
  }
}

var todos = [
  {
    taskText: "Jeremy Task 1",
    completed: true
  },
  {
    taskText: "David Task 1",
    completed: false
  },
  {
    taskText: "Timmy Task 1",
    completed: false
  }
]


ReactDOM.render(<ToDoApp todos={todos} />,
   document.getElementById('root'));

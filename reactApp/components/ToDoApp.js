import React from 'react'
import ToDoList from './ToDoList'
import InputLine from './InputLine'

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



export default ToDoApp;

import React from 'react'
import ToDoList from './ToDoList'
import InputLine from './InputLine'

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    console.log('I have been triggered')
    this.setState ({
      todos:todos
    })
  }

  addTodo(task) {
    
    var dummyData = this.state.todos.slice();

    dummyData.push({taskText:task, completed:false});
    return (
      this.setState({
        todos:dummyData
      })
    )
  }

  render(){
    return (
      <div className="container">
        <InputLine submit={task => this.addTodo(task)} />
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

export default ToDoApp;

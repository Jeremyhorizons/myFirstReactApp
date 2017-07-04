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

  removeTodo(index) {
    var temp = this.state.todos.slice();
    temp.splice(index, 1)
    this.setState({
      todos:temp
    })
  }

  addTodo(task) {
    var temp = this.state.todos.slice();
    temp.push({taskText:task, completed:false});
    this.setState({
      todos:temp
    })
  }

  render(){
    return (
      <div className="container">
        <InputLine submit={task => this.addTodo(task)} />
        <ToDoList todos={this.state.todos} todoXClick={(index)=>this.removeTodo(index)}/>
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

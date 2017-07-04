import React from 'react'
import ToDo from './ToDo'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="todolist">
        <h3>Todo List</h3>
        <ul>
          {this.props.todos.map((task, index)=><ToDo key={"todo"+index} task={task} xClick={()=>this.props.todoXClick(index)}/>)}
        </ul>
      </div>
    )
  }
}

export default ToDoList;

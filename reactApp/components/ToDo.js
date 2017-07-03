import React from 'react'

class ToDo extends React.Component {
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

export default ToDo;

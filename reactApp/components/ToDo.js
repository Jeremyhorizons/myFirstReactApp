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
    console.log(this.props)
    var isCompleted = (task) => {
      if (task.completed) {
        return <li><button onClick={this.props.xClick} type="button" >X</button><strike>{task.taskText}</strike></li>
      } else {
        return <li><button onClick={this.props.xClick} type="button" >X</button>{task.taskText}</li>
      }
    };

    return (
        isCompleted(this.props.task)
    )
  }
}

export default ToDo;

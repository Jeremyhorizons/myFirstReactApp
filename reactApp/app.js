import React from 'react';
import ReactDOM from 'react-dom';


class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <li><button type="button">X</button>{" "}{this.props.task}</li>
      </div>
    )
  }
}


class ToDoList extends React.Component {
  render(){
    return(
      <div>
        <h3>Todo List</h3>
        <ul>
          {this.props.dummyData.map((task,i)=><Todo task={task}/>)}
        </ul>
      </div>
    )
  }
}
var dummyData = ["Jeremy is here", "Timmy is there", "Amy is everywhere", "David is no where"];

ReactDOM.render(<ToDoList dummyData={dummyData} />,
   document.getElementById('root'));

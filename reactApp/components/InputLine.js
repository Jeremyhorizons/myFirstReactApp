import React from 'react'

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

export default InputLine;

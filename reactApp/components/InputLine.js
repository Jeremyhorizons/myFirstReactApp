import React from 'react'

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ""
    }
  }

  handleTyping(event) {
    this.setState ({
      typedText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state.typedText)
    this.setState({
        typedText: ""
    })
  }

  render(){
    return (
      <form onSubmit={(event)=>this.handleSubmit(event)} className="inputline">
        <input onChange={(event)=>this.handleTyping(event)} type="text" value={this.state.typedText}/>
        <input type="submit" value="Add todo item"/>
      </form>
    )
  }
}

export default InputLine;

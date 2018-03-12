import React, { Component } from 'react'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {likeMe: 1}
    this.newHandleClick = this.newHandleClick.bind(this)
  }
  render() {
    const sum = 5 + 10
    return (
      <div className="App">
        <Header title="Test Prop" sum={sum} />
        <button onClick={this.handleClick.bind(this)}>Click 1</button>
        <button onClick={() => this.handleClick()}>Click 2</button>
        <button onClick={this.newHandleClick}>Click 3</button>
        <button onClick={() => this.newHandleClick2('Name of handle click')}>Click 4</button>
      </div>
    )
  }

  handleClick() {
    console.log(this.state.likeMe)
  }
  newHandleClick() {
    console.log(this.state.likeMe)
  }
  newHandleClick2 = (name) => {
    console.log(name, this.state.likeMe)
  }
}

export default App;

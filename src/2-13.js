import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {
    this.textInput.focus()
  }

  focusText = () => {
    this.textInput.focus()
  }
  render () {
    return (
      <div className="App">
        <h1>Ref</h1>
        <p><input type="text" placeholder="text1" ref={(input) => {this.textInput = input}} /></p>
        <p><input type="text" placeholder="text2" /></p>
        <button onClick={this.focusText}>Click Focus</button>

      </div>
    )
  }
}

export default App;

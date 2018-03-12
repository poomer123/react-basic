import React, { Component } from 'react'

class App extends Component {

  state = { likeMe: 0}


  render() {
    return (
      <div className="App">
        <h1>{this.state.likeMe}</h1>
        <button onClick={this.click}>Like</button>
      </div>
    )
  }

  click = () => {
    this.setState((prevState) => {
      return {
        likeMe: prevState.likeMe + 1
      }
    })
  }

}

export default App;

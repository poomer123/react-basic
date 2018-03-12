import React, { Component } from 'react'
import Header from './Header'

class App extends Component {
  render() {
    const sum = 5 + 10
    return (
      <div className="App">
        <Header />
        {sum}
      </div>
    );
  }
}

export default App;

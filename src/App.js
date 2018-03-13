import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header caption="Sample Caption" />
        <Sidebar>
          <ul>
            <li>test 1</li>
            <li>test 2</li>
            <li>test 3</li>
          </ul>
        </Sidebar>
      </div>
    )
  }
}

export default App;

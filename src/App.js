import React, { Component } from 'react'
import Todolist from './Todolist'

class App extends Component {
  render () {
    const todos = ['work', 'goto', 'school', 'play games']
    return (
      <div className="App">
        <h1>To Do List</h1>
        <Todolist data={todos} />
      </div>
    )
  }
}

export default App;

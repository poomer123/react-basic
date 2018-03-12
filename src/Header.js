import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="App">
        <h1>Header</h1>
        <p>Prop is : {this.props.title}</p>
        <p>{this.props.sum}</p>
      </div>
    );
  }
}

export default Header

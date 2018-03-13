import React, { Component } from 'react'
import Likebutton from './Likebutton'
import Profile from './Profile'

class App extends Component {
  state = {likeMe: 0, showButton: true}


  componentDidMount() {
    console.log('App: componentDidMount')
  }
  render () {
    console.log('App: render')
    return (
      <div>
        <h1>React Lifecycle</h1>
        <Profile like={this.state.likeMe} hideBtn={this.setHideButton} />
        {
          this.state.showButton &&
          <Likebutton onClickLike={this.ClickLike} />
        }
        
      </div>
    )
  }

  ClickLike = () => {
    this.setState( (ps) => {
      return {
        likeMe: ps.likeMe + 1
      }
    })
  }

  setHideButton = () => {
    this.setState( (ps) => {
      return {
        showButton: false
      }
    })
  }
}

export default App;

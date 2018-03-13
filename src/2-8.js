import React, { Component } from 'react'
import LikeButton from './LikeButton'

class App extends Component {

  state = { likeMe: 0, disLike: 0}


  render() {
    return (
      <div className="App">
        <h1>Like : {this.state.likeMe}</h1>
        <h1>Dislike : {this.state.disLike}</h1>
        <LikeButton onClickLike={this.click} like="{true}" />
        <LikeButton onClickLike={this.click} />
      </div>
    )
  }

  click = (like) => {
    if(like) {
      this.setState((prevState) => {
        return {
          likeMe: prevState.likeMe + 1
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          disLike: prevState.disLike + 1
        }
      })
    }
  }

}

export default App;

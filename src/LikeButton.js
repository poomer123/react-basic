import React, { Component } from 'react'

class Likebutton extends Component {
    render() {
        return (
            <button onClick={this.handleClick}>{this.props.like ? 'Like me' : 'Dislike'}</button>
        )
    }

    handleClick = () => {
        this.props.onClickLike(this.props.like)
    }

}

export default Likebutton
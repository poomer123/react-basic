import React, { Component } from 'react'

class Likebutton extends Component {
    componentWillUnmount(){
        console.log('Likebutton: componentWillUnmount')
    }
    render() {
        return (
            <button onClick={this.handleClick}>Like me</button>
        )
    }

    handleClick = () => {
        this.props.onClickLike()
    }

}

export default Likebutton
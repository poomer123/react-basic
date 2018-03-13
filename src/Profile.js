import React, { Component } from 'react'

class Profile extends Component {
    componentDidMount() {
        console.log('Profile: componentDidMount')
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.like === 2 && this.props.like < 2) {
            this.props.hideBtn()
        }
        console.log('Profile: componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Profile: shouldComponentUpdate')
        return true
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Profile: componentWillUpdate') 
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Profile: componentDidUpdate') 
    }
    render() {
        return (
            <h2>Like : {this.props.like}</h2>
        )
    }

    handleClick = () => {
        this.props.onClickLike()
    }

}

export default Profile
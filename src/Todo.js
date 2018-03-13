import React, { Component } from 'react'
import Btn from './Btn'


class Todo extends Component {
    render() {
        return (
            <div>
                {this.props.text} <Btn />
            </div>
        )
    }
}

export default Todo
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class Todolist extends Component {
    static childContextTypes = {
        color: PropTypes.string,
    }

    getChildContext() {
        return {
            color: 'red'
        }
    }
    render() {
        return (
            <div>
                {
                    this.props.data.map((todo, i) =>
                        <Todo key={i} text={todo} />
                    )
                }
            </div>
        )
    }
}


// Todolist.childContextTypes = {
//     color: PropTypes.string,
// }

export default Todolist
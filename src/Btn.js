import React from 'react'
import PropTypes from 'prop-types'


// class Btn extends Component {
//     static contextTypes = {
//         color: PropTypes.string
//     }
//     render() {
//         return (
//             <button style={{ backgroundColor: this.context.color }}>
//                 Btn
//                 {this.props.children}
                
//             </button>
//         )
//     }
// }


const Btn = (props, context) => {
    return (
        <button style={{ backgroundColor: context.color }}>
            Btn
            {props.children}
        </button>
    )  
}

Btn.contextTypes = {
    color: PropTypes.string
}

export default Btn
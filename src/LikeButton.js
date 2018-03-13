import React from 'react'

const Likebutton = (props) => {
    return (
        <button onClick={props.onClickLike}>Like me</button>
    )

    // function handleClick() {
    //     props.onClickLike()
    // }
}

// class Likebutton extends Component {
//     componentWillUnmount(){
//         console.log('Likebutton: componentWillUnmount')
//     }
//     render() {
//         return (
//             <button onClick={this.handleClick}>Like me</button>
//         )
//     }

//     handleClick = () => {
//         this.props.onClickLike()
//     }

// }

export default Likebutton
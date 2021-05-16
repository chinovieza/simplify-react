import React, { Component } from 'react'

class PostPropsClass extends Component {
    render() {
        return (
            <div>
                <h3>Poster : { this.props.myId }</h3>
                <p>{ this.props.children }</p>
            </div>
        )
    }
}

export default PostPropsClass;
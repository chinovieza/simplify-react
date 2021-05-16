import React from 'react'

const PostPropsFunction = (props) => {

    const myId = props.myId;
    const content = props.children;

    return (
        <div>
            <h3>Poster : { myId }</h3>
            <p>{ content }</p>
        </div>
    )
}

export default PostPropsFunction;
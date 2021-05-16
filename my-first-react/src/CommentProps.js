import React from 'react'

const CommentProps = (props) => {
    return (
        <div>
            <span>{ props.data } from id: { props.userId }</span>
        </div>
    )
}

export default CommentProps;
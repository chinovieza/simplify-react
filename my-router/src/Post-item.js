import React from 'react';
import { Redirect } from 'react-router';

const PostItem = (props) => {

    const myRedirect = () => {
        return (
            <Redirect to="/" />
        );
    }

    const condition = props.title.trim().length === 0;

    return (
        <div>
            {condition ? myRedirect() : null}
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <hr/>
        </div>
    );
}

export default PostItem;
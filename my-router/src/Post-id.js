import React from 'react';
import PostItem from './Post-item';

const PostId = (props) => {

    const id = props.match.params.id;
    let post = null;
    
    if (id === '1') {
        post = (
            <PostItem title="Post #1 Monkey D. Luffy" content="Monkey D. Luffy, also known as Straw Hat Luffy and commonly as Straw Hat" />
        );
    } else if (id === '2') {
        post = (
            <PostItem title="Post #2 Roronoa Zoro" content="Roronoa Zoro,[1] also known as Pirate Hunter Zoro, is the combatant of the Straw Hat Pirates, and one of their two swordsmen." />
        );
    } else if (id === '3') {
        post = (
            <PostItem title="Post #3 Nami" content="Cat Burglar Nami is the navigator of the Straw Hat Pirates. She is the third member of the crew and the second to join" />
        );
    } else if (id === '4') {
        post = (
            <PostItem title="Post #4 Jinbe" content="Knight of the Sea Jinbe is the helmsman of the Straw Hat Pirates. He is the tenth member of the crew and the ninth to join, doing so during the Wano Country Arc" />
        );
    }

    return (
        <div>
            {post}    
        </div>
    );
}

export default PostId;
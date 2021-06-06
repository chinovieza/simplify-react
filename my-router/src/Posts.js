import React from 'react';
import PostItem from './Post-item';

const Posts = () => {
    return (
        <div>
            <PostItem title="Post #1 Monkey D. Luffy" content="Monkey D. Luffy, also known as Straw Hat Luffy and commonly as Straw Hat" />
            <PostItem title="Post #2 Jinbe" content="Knight of the Sea Jinbe is the helmsman of the Straw Hat Pirates. He is the tenth member of the crew and the ninth to join, doing so during the Wano Country Arc" />
        </div>
    );
}

export default Posts;
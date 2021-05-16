import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostPropsFunction from './PostPropsFunction';
import PostPropsClass from './PostPropsClass';
import CommentProps from './CommentProps';

const App = () => {
    return (
        <div className="App">
            <PostPropsFunction myId="1">
                The Straw Hat Pirates, also known as the Mugiwara Pirates, Straw Hat Crew or simply the Straw Hats, are an infamous and powerful rising pirate crew that originated from the East Blue
                <CommentProps userId="110" data="5 Stars" />
                <CommentProps userId="111" data="4 Stars" />
            </PostPropsFunction>
            <PostPropsFunction myId="2">
                The Heart Pirates are an infamous and notable rookie pirate crew from the North Blue and introduced on Sabaody Archipelago around the time the Straw Hat Pirates arrived there two years ago.
            </PostPropsFunction>
            <PostPropsClass myId="3">
                The Whitebeard Pirates were formerly one of the strongest pirate crews in the world, as their late captain, Whitebeard, was one of the only pirates to have ever been a match for the Pirate King, Gol D. Roger, in a fight.
            </PostPropsClass>
            <PostPropsClass myId="4">
                The Roger Pirates were the pirate crew of the late Pirate King, Gol D. Roger, and were the only known crew to ever reach Laugh Tale, the end of the New World in the Grand Line.
                <CommentProps userId="102" data="5 Stars" />
            </PostPropsClass>
        </div>
    )
}

export default App;
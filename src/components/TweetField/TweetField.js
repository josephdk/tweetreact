import React from 'react';
import './TweetField.css';

const TweetField = () => {
    return (
        <div className="tweet-field-container cell-bg">
            <input type="text" className="tweet-field dib ma2 pa1" placeholder="Post something..."/>
            <button className="f6 grow link ph3 pv2 dib white ma2 pa1 bg-dark-gray">Post</button>
        </div>
    );
}

export default TweetField;
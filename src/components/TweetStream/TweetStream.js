import React from 'react';
import TweetField from '../TweetField/TweetField';

class TweetStream extends React.Component {
    render () {
        return (
            <div>
                <TweetField />
                <div className="tweet-stream grid-col">
                    <h1>Tweet-Stream Section</h1> 
                </div>
            </div>
        );
    }
}

export default TweetStream;
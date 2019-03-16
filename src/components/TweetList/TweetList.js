import React, {Component} from 'react';
import './TweetList.css';

class TweetList extends Component {
    render () {
        const { authorUsername, tweetContent } = this.props.tweet;

        return (
            <div className="cell-bg tweet-list">
                <p>{authorUsername}</p>
                <p>{tweetContent}</p>
            </div> 
        );
    }
}

export default TweetList;
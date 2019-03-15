import React, {Component} from 'react';
import './TweetList.css';

class TweetList extends Component {
    render () {
        const { body, name, email, id } = this.props.tweet;
        return (
            <div className="cell-bg tweet-list">
                <p>Name: {name} - Email: {email}</p>
                <p>{body}</p>
            </div>
        );
    }
}

export default TweetList;
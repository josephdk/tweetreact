import React, {Component} from 'react';
import TweetList from '../TweetList/TweetList';

class TweetStream extends Component {

    render () {
        return this.props.tweets.map((tweet) => (
            <TweetList key={tweet.id} tweet={tweet} />
        ));
    }
}

export default TweetStream;
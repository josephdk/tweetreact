import React, {Component} from 'react';
import TweetList from '../TweetList/TweetList';

class TweetStream extends Component {

    state = {
        tweets: [],
    }

    componentDidMount() {
        fetch('http://localhost:3001/')
        .then(response => response.json())
        .then(data => this.setState({ tweets: data.tweets }));
    }

    render () {
        return this.state.tweets.map((tweet) => (
            <TweetList key={tweet.tweetid} tweet={tweet} />
        ));
    }
}

export default TweetStream;
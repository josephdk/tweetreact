import React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import TweetList from '../TweetList/TweetList';

const TweetStream = ({ tweets }) => {
    return (
        <div className="tweet-stream">
            {
                Object.keys(tweets).map((res, i) => {
                    if (tweets) return <TweetList key={i} tweets={tweets} />
                    else return '';
                })
            }
        </div>
    );
}

export default TweetStream;
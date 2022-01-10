import React from 'react';
import PostItem from './PostItem';

const Posts = (props) => {
    return (
        <div className="posts">
            {props.posts.map((item, index) => {
                const month = item.date.toLocaleString('en-US', { month: 'long' });
                const day = item.date.toLocaleString('en-US', { day: '2-digit' });
                return (
                    <PostItem
                        title={item.title}
                        user={'John Smith'}
                        location={item.location}
                        date={month + " " + day}
                        bio={item.bio}
                        key={index.toString()}
                        tags={item.tags}
                    />
                );
            })}
        </div>
    )
}

export default Posts;

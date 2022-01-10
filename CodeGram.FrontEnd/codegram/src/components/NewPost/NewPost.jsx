import React from 'react';
import PostForm from './PostForm';
import './NewPost.css';

const NewPost = (props) => {

    const onAddPostHandler = (enteredData) => {
        const postData = {
            ...enteredData,
            id: Math.random().toString()
        };
        props.onAddPost(postData);
    };

    return (
        <div>
            <PostForm onAddPost={onAddPostHandler} />
        </div>
    );

};

export default NewPost;

import React, { useState } from 'react';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import PostForm from './PostForm';
import './AddPost.css';

const AddPost = (props) => {
  const [toggleForm, setToggleForm] = useState(false);

  const formHandler = () => {
    setToggleForm(!toggleForm);
  }

  return (
    <div className="container">
      <div className="add__post" onClick={formHandler}>
        <AiOutlineAppstoreAdd />
      </div>
      <div className="post__form">
        {toggleForm && (
          <PostForm
            onAddPost={props.onAddPost}
            setToggleForm={setToggleForm}
          />
        )}
      </div>
    </div>

  );
};

export default AddPost;

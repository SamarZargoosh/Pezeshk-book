import React from 'react';
import styles from './Post.module.css'

const Post = ({postData}) => {
    return (
        <div className={styles.container}>
            <h1>{postData.title}</h1>
            <p>{postData.body}</p>
            <button>Continue reading</button>
        </div>
    );
};

export default Post;
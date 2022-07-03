import React from 'react';
import styles from './Post.module.css';
import { Link } from 'react-router-dom';

const Post = ({postData}) => {
    return (
        <div className={styles.container}>
            <h1>{postData.title}</h1>
            <p>{postData.body}</p>
            <button><Link to='/post1'>Continue reading</Link></button>
        </div>
    );
};

export default Post
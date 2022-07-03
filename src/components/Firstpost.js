import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Firstpost.module.css'


const Firstpost = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async() => {
        await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => {
                console.log(err);
        })
    }

    return (
        <div className={styles.container}>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
        </div>
    );
};


export default Firstpost;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const Api = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            } , [] )
    })
    return (
        <div>
                {
                    posts.map(post => <Post key={post.id} postData={post}/>  )
                }
        </div>
    );
};

export default Api;
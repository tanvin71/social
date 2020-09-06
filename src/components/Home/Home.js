import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';
const Home = () => {
    const [posts, setPosts ] = useState([])


  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data)
    )
  }, [])
    return (
        <div>
            <Header></Header>

          {
           posts.map(post => <Post key={post.id} post={post}></Post>)
          }
          

        </div>
    );
};

export default Home;
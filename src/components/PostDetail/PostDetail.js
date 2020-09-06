import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const postStyle1 ={
        border: '1px solid purple',
        marginBottom: '20px', 
        padding: '20px',
        width:'80%',
        margin: 'auto',
        background:'#f6f6f6',
        borderRadius: '20px',  
    }
    const [comments,setComments] = useState([])
    const {postId} = useParams()
        useEffect(() =>{
            const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                const url = `https://randomuser.me/api/?results=15`;
                fetch(url)
                .then(res => res.json())
                .then(randomData => {
                    const newData = randomData.results;
                    const addNew = data.map((element, index) =>{
                        element.picture = newData[index].picture.large;
                        return element
                    })
                    setComments(addNew);
                })
                
                console.log(data)})
        },[])
    const [post, setPost] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
        
    },[])
    
    
    return (
        <div style={{textAlign: 'center'}}>
            <div style={postStyle1}>
                <h1>Post id: {post.id}</h1>
                <h1>Post title: {post.title}</h1>
                <p>{post.body}</p>

                <h1>All comments are below</h1>
            
            </div>   
            <div>
                {
                    comments.map(comment => <Comments key= {comment.key} comment={comment}></Comments>)
                }
            </div>
        </div>
            
            
            
        
    );
};

export default PostDetail;
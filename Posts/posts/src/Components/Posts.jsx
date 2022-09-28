import { Button, ButtonGroup } from '@chakra-ui/react';
import '../App.css';
 
import { useState, useEffect } from "react";


const getData = () => {
   return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`).then((res) => res.json());
}


 const Posts = () => {
   const [ posts, setPosts ] = useState([]);

   const getPosts = async () => {
     let data = await getData().then((res) => setPosts(res));
   }
   console.log(posts);
    return (
      <div>
         <div className="Button">
         <Button colorScheme='blue' onClick={getPosts}>Get Posts</Button>
         </div>
         <div className="Posts">
         
           {posts.map((post) => (
            <div className="Post" key={post.id}>
               <h1>{post.body}</h1></div>
           ))}
         
         </div>
      </div>
     
    )
 }

 export default Posts;
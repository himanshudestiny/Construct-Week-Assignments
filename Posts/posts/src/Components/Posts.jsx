import { Button, ButtonGroup } from '@chakra-ui/react';
import '../App.css';
 
import { useState, useEffect } from "react";


 const Posts = () => {
   const [ posts, setPosts ] = useState([]);
   const [page, setPage ] = useState(1);
   const [loading, setLoading] = useState(false);

   const handlePage = (change) => {
    setPage(page+change);
    // getPosts(page);
   }


   useEffect(() => {
    getPosts(page);
   },[page])

   const getPosts = async (page=1) => {
  
    try{
      setLoading(true);
      let res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      let data=await res.json();
      setPosts(data);
      setLoading(false);
    }
    catch(err) {
      setLoading(false);
      console.log(err);
    }
   }

   if(loading) 
   {
    return <h1 style={{fontSize:"40px", fontWeight:"600", color:"blue", fontFamily:"sans-serif", marginTop:"80px"}} >Loading...</h1>
   }
   
   console.log(posts);
    return (
      <div>
        
         <div className="Button">
         <h1 style={{fontSize:"40px", fontWeight:"800", color:"blue", fontFamily:"sans-serif"}}>POSTS</h1>
        
         </div>
         <div className="Posts">
         
           {posts.map((post) => (
            <div className="Post" key={post.id}>
               <h1> {post.id}) {post.body}</h1></div>
           ))}
         
         </div>
         <div className="Buttons">
         <Button disabled={page===1} colorScheme='blue' onClick={() => handlePage(-1)}>PREV</Button>
         <Button colorScheme='blue'>{page}</Button>
         <Button colorScheme='blue' onClick={() => handlePage(1)}>NEXT</Button>
         </div>
      </div>
     
    )
 }

 export default Posts;
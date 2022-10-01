import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {AppContext} from "../Context/AppContext";
import { useContext } from "react";

const Theme = {
    light:{
        color:"teal",
        border:"2px solid teal", 
        width:"35%", 
        margin:"auto", 
        marginTop:"40px",
        marginBottom:"20px", 
        padding:"20px", 
        borderRadius:"20px",  
        textDecoration:"none"
    },
    dark:{
        color:"black",
        border:"2px solid black", 
        width:"35%", 
        margin:"auto", 
        marginTop:"40px",
        marginBottom:"20px", 
        padding:"20px", 
        borderRadius:"20px",
        textDecoration:"none"
    }
}


const Button = {
    light:{
        backgroundColor:"teal",
        color:"white",
       gap:"20px",
        border:"none",
        height:"30px",
        fontSize:"20px",
        
    },
    dark:{
        backgroundColor:"black",
        color:"white",
        gap:"20px",
        height:"30px",
        fontSize:"20px",
        border:"none"
    }
}

const getUser = (url) => {
    return fetch(url).then((res) => res.json());
}

const User = () => {
    const {theme, toggleTheme} = useContext(AppContext);
    console.log(theme);
    const [ user, setUser ] = useState({});
    const { users_id } = useParams();
    console.log(users_id);
    
   useEffect(() => {
    getUser(`https://reqres.in/api/users/${users_id}`).then((res) => setUser(res.data));
   },[])

    return (
        <div style={theme==="light" ? Theme.light : Theme.dark}>
            <img src={user.avatar} alt="" />
            <h1>Name : {user.first_name} {user.last_name}</h1>
           <Link to="/users"> <button  style={theme==="light" ? Button.light : Button.dark}>Go Back</button> </Link>
        </div>
    )
}

export default User;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import {AppContext} from "../Context/AppContext";
import { useContext } from "react";

const Theme = {
    light:{
        color:"teal",
        border:"2px solid teal", 
        width:"35%", 
        margin:"auto", 
        marginBottom:"20px", 
        padding:"10px", 
        borderRadius:"20px",  
        textDecoration:"none"
    },
    dark:{
        color:"black",
        border:"2px solid black", 
        width:"35%", 
        margin:"auto", 
        marginBottom:"20px", 
        padding:"10px", 
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



const changeNumber = ( value ) => {
    value=Number(value);
    if(typeof value==="number" && value<=0 )
    {
        value=1;
    }
    if(!value) {
        value=1;
    }
    return value;
}


const getData = (url) => {
    return fetch(url).then((res) => res.json());
}

const Users = () => {
    const {theme, toggleTheme} = useContext(AppContext);
    console.log(theme);
    const [ users, setUsers ] = useState([]);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const initialPage = changeNumber(searchParams.get('page'));
    const [ page, setPage ] = useState(initialPage);
    
    useEffect(() => {
          getData(`https://reqres.in/api/users?page=${page}`).then((res) => setUsers(res.data));      
    }, [page])

    useEffect(() => {
        setSearchParams({page});
    },[page]);

    console.log(searchParams.get('page'));
    return (
        <div>
            <h1>Users</h1>
            <div>
            {users.map((user) => (
              <Link style={{textDecoration:"none"}} key={user.id} to={`/users/${user.id}`}>  <div style={ theme==="light" ? Theme.light : Theme.dark }>
                    <img src={user.avatar} alt="" />
                    <h1>Name : {user.first_name} {user.last_name}</h1>
                    <h2>Email : {user.email}</h2>
                </div> </Link>
            ))}
            </div>
            <div style={{margin:"auto", marginTop:"40px" , paddingBottom:"40px", display:"flex", justifyContent:"space-evenly", width:"15%" }}>
              <button  style={theme==="light" ? Button.light : Button.dark} onClick={() => setPage(page-1)}>PREV</button>
              <button  style={theme==="light" ? Button.light : Button.dark}>{page}</button>
              <button  style={theme==="light" ? Button.light : Button.dark} onClick={() => setPage(page+1)}>NEXT</button>
            </div>
        </div>
    )
}

export default Users;
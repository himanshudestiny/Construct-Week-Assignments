import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import {AppContext} from "../Context/AppContext";
import { useContext } from "react";

const Theme = {
    light:{
        backgroundColor:"teal",
        color:"white",
        display:"flex",
        justifyContent:"space-between"
    },
    dark:{
        backgroundColor:"black",
        color:"white",
        display:"flex", 
        justifyContent:"space-between"
    }
}


const links = [
    {
        path:"/",
        element:"Home"
    },
    {
        path:"/contact",
        element:"Contact"
    },
    {
        path:"/about",
        element:"About Us"
    },
    {
        path:"/users",
        element:"Users"
    }
]

// const defaultStyle = {
//  textDecoration:"none",
//  color:"black"
// }
// const activeStyle = {
//     textDecoration:"none",
//     color:"red"
//    }

const Navbar = () => {
    const {theme, toggleTheme} = useContext(AppContext);
  console.log(theme);
    return (
        <div style={theme==="light" ? Theme.light : Theme.dark}>
        <div style={{display:"flex", justifyContent:"space-between", fontSize:"30px", width:"75%"}}>
            {links.map((link) => (
                <NavLink className={({isActive}) => {
                    return isActive ? styles.active : styles.default ;
                }}
                key={link.path}
                to={link.path}>{link.element}</NavLink>
            ))}
        </div>
        <div style={{display:"flex", justifyContent:"space-between", fontSize:"30px", background:"none", fontSize:"20px"}}>
            <button style={{ fontSize:"30px", background:"none", border:"none", color:"white"}} onClick= {() => toggleTheme()}>Change Theme</button>
        </div>
        </div>
    )
}

export default Navbar;
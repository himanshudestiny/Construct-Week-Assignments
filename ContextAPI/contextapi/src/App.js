import { useContext } from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/Routes";
import {AppContext} from "./Context/AppContext";

const Theme = {
  light: {
    backgroundColor:"white",
    color:"teal"
  },
  dark: {
    backgroundColor:"grey",
    color:"black"
  }
}




function App() {
  const {theme, toggleTheme} = useContext(AppContext);
  console.log(theme);
  return (
    <div className="App" style={theme==="light" ? Theme.light : Theme.dark}>
      
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;

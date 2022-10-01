import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Users from "./Users";
import User from "./User";
import PageNotFound from "./PageNotFound";


const AllRoutes = () => {
    return (
          <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/users/:users_id" element={<User />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </div>
    )
}
export default AllRoutes;
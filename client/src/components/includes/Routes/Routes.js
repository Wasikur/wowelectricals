import { Routes, Route} from "react-router-dom";
import Home from "../../Home";
import About from "../../About";
import Shop from "../../Shop";
import Contact from "../../Contact";
import ProductDetail from "../../ProductDetail";
import Login from "../../Login";
import Signup from "../../Signup";
import ErrorPage from "../ErrorPage/Errorpage";
import Logout from "../../Logout";

export default function Routing(){
    return(
        <Routes> 
            <Route path="/" element={<Home />} />            
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:categoryurl" element={<Shop />} />
            <Route path="/productdetail/:producturl" element={<ProductDetail />} />
            <Route path="/search/:searchtext" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
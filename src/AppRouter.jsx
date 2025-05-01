import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import Shorts from "./pages/Shorts/Shorts";
import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Sidebar/Sidebar";

const AppRouter = () => {
    <Router>
        <Navbar/>
        {/* <Sidebar/> */}
        <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" index element={<Home/>}/>
            <Route path="/Shorts" element={<Shorts />} />
            
        

        </Routes>
    </Router>
}

export default AppRouter;
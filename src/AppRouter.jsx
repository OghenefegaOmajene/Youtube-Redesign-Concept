import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import Shorts from "./pages/Shorts/Shorts";
import Video from "./pages/Video/Video";
import Channel from "./pages/Channel/Channel";
// import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Sidebar/Sidebar";

const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" index element={<Home/>}/>
                <Route path="/Shorts" element={<Shorts />} />
                <Route path="/Video" element={<Video />} />
                <Route path="/Channel" element={<Channel />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
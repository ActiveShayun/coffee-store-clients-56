import { Outlet } from "react-router-dom";
import Navbar from "../Headers/Navbar";



const Layout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;
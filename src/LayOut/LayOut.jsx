import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Nav";

const LayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;
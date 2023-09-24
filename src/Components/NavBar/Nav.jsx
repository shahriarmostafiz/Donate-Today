import { NavLink } from "react-router-dom";

const Navbar = () => {
    const logo = "https://i.ibb.co/3hVw4xS/Logo.png"
    return (
        <div >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row py-5 gap-8 md:gap-0  justify-between items-center">

                <div>
                    <img src={logo} className="w-40" alt="" />
                </div>
                <div className="flex list-none gap-4 md:gap-6 text-lg font-medium">
                    <li>
                        <NavLink to={"/"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-red-600" : ""
                            }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/donations"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-red-600" : ""
                            }
                        >Donations</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/stat"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-red-600" : ""
                            }
                        >Statistics</NavLink>
                    </li>
                </div>


            </div>

        </div>
    );
};

export default Navbar;
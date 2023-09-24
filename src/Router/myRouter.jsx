import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import Donations from "../Pages/Donation/Donations";
import Statistics from "../Pages/Statistics/Statistics";

const myRouter = createBrowserRouter([{
    path: "/",
    element: <LayOut></LayOut>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/donations",
            element: <Donations></Donations>
        },
        {
            path: "/stat",
            element: <Statistics></Statistics>
        }
    ]

}])
export default myRouter;
import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import Donations from "../Pages/Donation/Donations";
import Statistics from "../Pages/Statistics/Statistics";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myRouter = createBrowserRouter([{
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/data.json')
        },
        {
            path: "/donations",
            element: <Donations></Donations>
        },
        {
            path: "/stat",
            element: <Statistics></Statistics>
        },
        {
            path: "/details/:id",
            element: <Details></Details>,
            loader: () => fetch('/data.json')
        }
    ]

}])
export default myRouter;
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import Tracker0 from '../layout/tracker0'
import NavBarHome from "../components/navBarHome/NavBarHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
    },
    {
        path: "/",
        element: <Home/>
        ,
    },
    {
        path: "taracker0",
        element: <NavBarHome/>
        ,
    },
    {
        path: "taracker0",
        element: <Tracker0/>
        ,
    },
])

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//       loader: rootLoader,
//       children: [
//         {
//           path: "team",
//           element: <Team />,
//           loader: teamLoader,
//         },
//       ],
//     },
//   ]);
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "../pages/Private/PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"login",
                element:<Login />
            },
            {
                path:"signUp",
                element:<Register />
            },
            {
                path:"bookings",
                element:<PrivateRoute><Bookings /></PrivateRoute>
            },
            {
                path:"checkout/:id",
                element:<Checkout />,
                loader:({params})=> fetch(`http://localhost:5000/checkout/${params.id}`)
            }
        ]
    }
])

export default router;
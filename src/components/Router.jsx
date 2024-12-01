import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import AddCoffee from "./AddCoffee"
import CoffeeUpdate from "./CoffeeUpdate"
import SignUp from "../Authentication/SignUp"
import Users from "../Authentication/Users"
import AuthLayout from "../Authentication/AuthLayout"
import Login from "../Authentication/Login"



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: "addCoffee",
                element: <AddCoffee />
            },
            {
                path: "updateCoffee/:id",
                element: <CoffeeUpdate />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: "signUp",
                element: <SignUp />
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "users",
                element: <AuthLayout />,
                children: [
                    {
                        path: "/users",
                        element: <Users />,
                        loader: () => fetch('http://localhost:5000/users')
                    }
                ]
            }
           

        ]


    }

])

export default router
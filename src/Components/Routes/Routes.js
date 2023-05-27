import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ContactMessage from "../Pages/ContactMessage/ContactMessage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import HomeCard from "../Pages/Home/HomeCard/HomeCard";
import AllServices from "../Pages/Home/AllServices/AllServices";
import CategoryTwo from "../Pages/Home/CategoryCard/CategoryTwo";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contactMessage',
                element: <ContactMessage></ContactMessage>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/all-services',
                element: <AllServices></AllServices>
            },
          
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ContactMessage from "../Pages/ContactMessage/ContactMessage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllServices from "../Pages/Home/AllServices/AllServices";
import AllHome from "../Pages/Home/AllHome/AllHome";
import AllHomeDetails from "../Pages/Home/AllHomeDetails/AllHomeDetails";
import CheckOutPage from "../Pages/CheckOutPage/CheckOutPage";
import DashBoardNav from "../DashBoard/DashBoardNav/DashBoardNav";
import AddAProducts from "../DashBoard/AddAProducts/AddAProducts";
import Dashboard from "../DashBoard/Dashboard/Dashboard";
import AllProducts from "../DashBoard/AllProducts/AllProducts";
import UpdateProducts from "../DashBoard/AllProducts/UpdateProducts";
import HomeReviews from "../Pages/Home/AllHomeDetails/HomeReviews";
import AllUsers from "../DashBoard/Users/AllUsers/AllUsers";
import ManageUsers from "../DashBoard/Users/ManageUsers/ManageUsers";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AllWebsiteReview from "../DashBoard/ManageWebsite/AllWebsiteReview/AllWebsiteReview";
import ManageContactMessage from "../DashBoard/ManageWebsite/ManageContactMessage/ManageContactMessage";
import ThankYou from "../Pages/ThankYou/ThankYou";
import AllOrders from "../DashBoard/Orders/AllOrders/AllOrders";


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
                element:<AllServices></AllServices>
            },
            {
                path: '/thank-you',
                element:<ThankYou></ThankYou>
            },
            {
                path: '/allHome/details/:id',
                element: <PrivateRoutes><AllHomeDetails></AllHomeDetails></PrivateRoutes>
            },
            {
                path: '/check-out-page/:id',
                element: <PrivateRoutes><CheckOutPage></CheckOutPage></PrivateRoutes>
            },
            {
                path: '/all-Home/reviews/:id',
                element: <PrivateRoutes><HomeReviews></HomeReviews></PrivateRoutes>
            },

            {
                path: '/allHome/:id',
                element: <AllHome></AllHome>,
                loader: ({ params }) => fetch(`http://localhost:5001/category/${params.id}`)

            },




        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardNav></DashBoardNav></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addProducts',
                element: <AddAProducts></AddAProducts>
            },
            {
                path: '/dashboard/allProducts',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/dashboard/update/products/:id',
                element: <UpdateProducts></UpdateProducts>
            },
            {
                path: '/dashboard/all-users',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/all-users/manage',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: '/dashboard/manage-website/website-review',
                element: <AllWebsiteReview></AllWebsiteReview>
            },
            {
                path: '/dashboard/manage-website/contact-message',
                element: <ManageContactMessage></ManageContactMessage>
            },
            {
                path: '/dashboard/orders/all-orders',
                element: <AllOrders></AllOrders>
            },
        ]
    }
])
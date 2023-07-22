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
import UserOrders from "../DashBoard/Orders/UserOrders/UserOrders";
import Payment from "../DashBoard/Orders/Payment/Payment";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import AllProductsReviews from "../DashBoard/AllProductsReviews/AllProductsReviews";
import ManageProductsReviews from "../DashBoard/ManageProductsReviews/ManageProductsReviews";
import UserProfile from "../DashBoard/Users/UserProfile/UserProfile";
import UpdateProductsReviews from "../DashBoard/ManageProductsReviews/UpdateProductsReviews";
import EditProfile from "../DashBoard/Users/UserProfile/EditProfile";
import AdminRoute from "./AdminRoute/AdminRoute";
import SellerRoutes from "./SellerRoutes/SellerRoutes";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError>,</DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            },
            {
                path: '/dashboard/addProducts',
                element: <AddAProducts></AddAProducts>
            },
            
            {
                path: '/dashboard/allProducts',
                element: <AdminRoute><AllProducts></AllProducts></AdminRoute>
            },
            {
                path: '/dashboard/allProducts/review',
                element: <AdminRoute><AllProductsReviews></AllProductsReviews></AdminRoute>
            },
            {
                path: '/dashboard/user-wise/review',
                element: <PrivateRoutes><ManageProductsReviews></ManageProductsReviews></PrivateRoutes>
            },
            {
                path: '/dashboard/user-wise/review/update/:id',
                element: <PrivateRoutes><UpdateProductsReviews></UpdateProductsReviews></PrivateRoutes>
            },
            {
                path: '/dashboard/update/products/:id',
                element: <AdminRoute><UpdateProducts></UpdateProducts></AdminRoute>
            },
            {
                path: '/dashboard/all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/all-users/manage',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: '/dashboard/users/profile',
                element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
            },
            {
                path: '/dashboard/users/profile/update/:id',
                element: <PrivateRoutes><EditProfile></EditProfile></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5001/users/${params.id}`)

            },
            {
                path: '/dashboard/manage-website/website-review',
                element: <AdminRoute><AllWebsiteReview></AllWebsiteReview></AdminRoute>
            },
            {
                path: '/dashboard/manage-website/contact-message',
                element: <AdminRoute><ManageContactMessage></ManageContactMessage></AdminRoute>
            },
            {
                path: '/dashboard/orders/all-orders',
                element:<AdminRoute> <AllOrders></AllOrders></AdminRoute>
            },
            {
                path: '/dashboard/orders/user-orders',
                element: <PrivateRoutes><UserOrders></UserOrders></PrivateRoutes>
            },
            {
                path: '/dashboard/orders/payments/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>
            },
        ]
    }
])
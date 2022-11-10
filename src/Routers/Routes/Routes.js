import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import MyReview from '../../Pages/MyReview/MyReview';
import MyService from '../../Pages/MyService/MyService';
import NotFound from '../../Pages/NotFound/NotFound';
import Register from '../../Pages/Register/Register';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import Services from '../../Pages/Services/Services';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const Routes = createBrowserRouter([
    {
        path: `/`,
        element: <Main></Main>,
        children: [
            {
                path: `/`,
                element: <Home></Home>
            },
            {
                path: `/services`,
                element: <Services></Services>,
                loader: () => fetch(`https://service-review-server-five.vercel.app/services`)

            },
            {
                path:`/login`,
                element: <Login></Login>
            },
            {
                path: `/register`,
                element: <Register></Register>
            },
            {
                path:`*`,
                element: <NotFound></NotFound>
            },
            {
                path:`/services/:id`,
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://service-review-server-five.vercel.app/services/${params.id}`)
            },
            {
                path:`/blogs`,
                element: <Blogs></Blogs>
            },
            {
                path: `/myreviews`,
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path: `/myservice`,
                element: <PrivateRoutes><MyService></MyService></PrivateRoutes>
            }
        ]
    }
])

export default Routes;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Services from '../../Pages/Services/Services';

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
                loader: () => fetch(`http://localhost:5000/services`)

            },
            {
                path:`/login`,
                element: <Login></Login>
            },
            {
                path: `/register`,
                element: <Register></Register>
            }
        ]
    }
])

export default Routes;
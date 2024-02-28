import {createBrowserRouter, Navigate} from "react-router-dom";

import {AuthLayout, MainLayout} from "./layouts";
import {MovieInfoPage, MoviesPage} from "./pages";
import {LoginPage} from "./pages";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                element: <AuthLayout/>, children: [
                    {
                        path: 'login', element: <LoginPage/>
                    },
                    {
                        path: 'movies', element: <MoviesPage/>
                    },
                    {
                        path: 'info', element:<MovieInfoPage/>
                    }
                ]
            }
        ]
    }
]);

export {
    router
}
import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {AuthLayout} from "./layouts";
import {MovieInfoPage, MoviesPage} from "./pages";
import {MovieInfo} from "./components/MoviesListContainer";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                element: <AuthLayout/>, children: [
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
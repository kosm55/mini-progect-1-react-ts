import {FC, PropsWithChildren} from 'react';
import {MoviesList} from "../components/MoviesListContainer";
import {Outlet} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const MoviesPage: FC<IProps> = () => {

    return (
        <div>
            <MoviesList/>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};
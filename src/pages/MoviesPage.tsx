import {Outlet} from "react-router-dom";

import {Genres, MoviesList} from "../components";
import {useContext} from "react";
import {DarkModeContext} from "../hoc/ContextProvider";
import css from "./MoviesPage.module.css"


const MoviesPage = () => {
    const darkModeContext = useContext(DarkModeContext);

    if (!darkModeContext) {
        return null;
    }

    const { darkMode, setDarkMode } = darkModeContext;

    return (
        <div className={darkMode? css.darkPage: css.whitePage}>
            <Genres/>
            <MoviesList/>
            <Outlet />
        </div>
    );
};

export {MoviesPage};


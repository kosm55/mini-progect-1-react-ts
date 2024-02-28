import {Outlet} from "react-router-dom";

import {Genres, MoviesList, SearchMovieForm} from "../components";
import {useContext, useState} from "react";
import {DarkModeContext} from "../hoc/ContextProvider";
import css from "./MoviesPage.module.css"
import {SubmitHandler} from "react-hook-form";


const MoviesPage = () => {
    const [searchMovie, setSearchMovie] = useState<string>('')
    const darkModeContext = useContext(DarkModeContext);

    const searchTitle  = (title: string)=> {
        setSearchMovie(title)
    }

    if (!darkModeContext) {
        return null;
    }
    const { darkMode, setDarkMode } = darkModeContext;

    return (
        <div className={darkMode? css.darkPage: css.whitePage}>
            <Genres/>
            <SearchMovieForm searchTitle={searchTitle}/>
            <MoviesList searchMovie={searchMovie}/>
            <Outlet />
        </div>
    );
};

export {MoviesPage};


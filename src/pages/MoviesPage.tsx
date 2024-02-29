import {Outlet} from "react-router-dom";

import {GenreBadge, Genres, MoviesList, SearchMovieForm} from "../components";
import {FC, PropsWithChildren, useContext, useEffect, useState} from "react";
import {DarkModeContext, GenreContext} from "../hoc/ContextProvider";
import css from "./MoviesPage.module.css"
import {SubmitHandler} from "react-hook-form";
import {IGenre} from "../interfaces/genreInterface";
import {genreService} from "../services";
import {GenreSearchPage} from "./GenreSearchPage";

interface IProps extends PropsWithChildren {

}

const MoviesPage:FC <IProps> = () => {
    const [searchMovie, setSearchMovie] = useState<string>('')
    const darkModeContext = useContext(DarkModeContext);
    const genres = useContext(GenreContext)


    const searchTitle  = (title: string)=> {
        setSearchMovie(title)
    }

    if (!darkModeContext) {
        return null;
    }
    const { darkMode, setDarkMode } = darkModeContext;

    return (
        <div className={darkMode? css.darkPage: css.whitePage}>
            <SearchMovieForm searchTitle={searchTitle}/>
            <div className={css.Genres}>
                {genres.map(genre=> <GenreBadge key={genre.id} genre={genre}/>)}
            </div>
            <MoviesList searchMovie={searchMovie}/>

        </div>
    );
};

export {MoviesPage};


import {FC, PropsWithChildren, useContext,  useState} from "react";

import {GenreBadge, MoviesList, SearchMovieForm} from "../components";
import {DarkModeContext, GenreContext} from "../hoc/ContextProvider";
import css from "./MoviesPage.module.css"


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


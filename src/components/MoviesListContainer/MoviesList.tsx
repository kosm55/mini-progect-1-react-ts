import {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesListCard} from "./MoviesListCard";
import css from "./MoviesList.module.css"




interface IProps {
    searchMovie: string
}

const MoviesList: FC<IProps> = ({searchMovie}) => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [querySearch, setQuerySearch] = useSearchParams({page: '1'});
    const [currentPage, setCurrentPage] = useState<number>(1)


    const page= query.get('page')

    useEffect(() => {
        if (page !=null)
        movieService.getAll(page).then(({data}) => {
            const filteredMovies = data.results.filter(movie => movie.title.toLowerCase().includes(searchMovie.toLowerCase()));
            // setMovies(data.results)
            setMovies(filteredMovies);
            setCurrentPage(+page)
        })
    }, [query, searchMovie]);


   const nextPage = () => setQuery(prevState => {
       const nextPage = (+prevState.get('page') + 1).toString();
       setCurrentPage(+nextPage);
       prevState.set('page', nextPage);
       return prevState;
   });

   const prevPage = () => setQuery(prevState => {
       const prevPage = (+prevState.get('page') - 1).toString();
       setCurrentPage(+prevPage);
       prevState.set('page', prevPage);
       return prevState;
   });



return (
    <div className={css.MoviesListMain}>
        <div className={css.buttonDiv}>
            <button disabled={currentPage === 1} onClick={prevPage}>Prev</button>
            <div>{currentPage}</div>
            <button onClick={nextPage}>Next</button>
        </div>
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
        </div>


    </div>
);
}
;

export {MoviesList};




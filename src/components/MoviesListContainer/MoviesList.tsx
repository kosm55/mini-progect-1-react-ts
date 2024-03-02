import {FC, useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesListCard} from "./MoviesListCard";
import css from "./MoviesList.module.css"
import {usePageQuery} from "../../hooks";

interface IProps {
    searchMovie: string
}

const MoviesList: FC<IProps> = ({searchMovie}) => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams()
    const {id} = useParams()
    const with_genres = query.get('with_genres')
    const withTitle = query.get('query')
    const {page, nextPage, prevPage, currentPage }=usePageQuery()



        useEffect(() => {
            if (id) {
                movieService.getAllWithGenre(page, id).then(({data})=> {
                    setMovies(data.results);
                    setQuery({ id, page })
                })
            }else if (searchMovie) {
                movieService.getAllWithTitle(page, searchMovie).then(({data}) => {
                    setMovies(data.results);
                    setQuery({searchMovie, page})
                })

                }else{
                    movieService.getAll(page).then(({data}) => setMovies(data.results))
                }
        }, [id, with_genres, withTitle, searchMovie, page]);



return (
    <div className={css.MoviesListMain}>
        <div className={css.buttonDiv}>
            <button disabled={currentPage === 1} onClick={prevPage}>Prev</button>
            <div>{page}</div>
            <button disabled={currentPage=== 500} onClick={nextPage}>Next</button>
        </div>
        <div className={css.MoviesList}>
            {movies && movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
        </div>
    </div>
);
}
;

export {MoviesList};




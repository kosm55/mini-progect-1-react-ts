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
    const {page, nextPage, prevPage, totalPage, currentPage }=usePageQuery()



        useEffect(() => {
            if (id)
            {
                movieService.getAllWithGenre(page, id).then(({data})=> {
                    setMovies(data.results);
                    setQuery({ with_genres, page })
                })
            }else if (searchMovie){
                movieService.getAll(page, totalPage).then(({data}) => {
                    const filteredMovieOfTitle = data.results.filter(movie => movie.title.toLowerCase().includes(searchMovie.toLowerCase()))
                    setMovies(filteredMovieOfTitle)
                })
            }else {
                movieService.getAll(page, totalPage).then(({data}) => setMovies(data.results))
            }
        }, [id, with_genres, searchMovie, page]);



return (
    <div className={css.MoviesListMain}>
        <div className={css.buttonDiv}>
            {/*<button onClick={()=>setQuery( {page: '1'})}>first</button>*/}
            <button disabled={currentPage === 1} onClick={prevPage}>Prev</button>
            <div>{currentPage}</div>
            <button disabled={currentPage=== 500} onClick={nextPage}>Next</button>
            {/*<button onClick={()=>setQuery( {page: "500"})}>last</button>*/}

        </div>
        <div className={css.MoviesList}>
            {movies && movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
        </div>


    </div>
);
}
;

export {MoviesList};




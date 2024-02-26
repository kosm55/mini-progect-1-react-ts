import {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services/movieService";
import {MoviesListCard} from "./MoviesListCard";
import css from "./MoviesList.module.css"


interface IProps{
    results: IMovie[]
    page: string
    total_pages: number
}
const MoviesList: FC = () => {
    const [movies, setMovies] = useState<IProps>( {page: '0', results: [], total_pages: 12})
    const [query, setQuery] = useSearchParams({page: '1'});
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)


    useEffect(() => {
        movieService.getAll().then(({data}) => {
            return setMovies(data);

        })
    }, []);


    const nextPage=()=>{

    }

    const prevPage=()=>{
    }



    return (
        <div  className={css.MoviesListMain}>
            <div>
                <button onClick={prevPage}>prev</button>
                <div>{currentPage}</div>
                <button onClick={nextPage}>next</button>
            </div>
            <div className={css.MoviesList}>
                {movies.results.map(movie=> <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>


        </div>
    );
};

export {MoviesList};




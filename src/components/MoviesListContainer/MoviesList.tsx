import {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesListCard} from "./MoviesListCard";
import css from "./MoviesList.module.css"


interface IProps{
    results: IMovie[]
    // page: string
    // total_pages: number
}
const MoviesList: FC = () => {
    const [movies, setMovies] = useState<IProps>( {results: []} )
    const [query, setQuery] = useSearchParams({page: '1'});
    const [currentPage, setCurrentPage] = useState <number>(1)
    const [totalPage, setTotalPage] = useState<number>(1)


    useEffect(() => {
        movieService.getAll().then(({data}) => {
            return setMovies(data);
        })
    }, []);

    const nextPage=()=>{
        setCurrentPage(prevState => prevState+1)

    }

    const prevPage=()=>{
        setCurrentPage(prevState => prevState-1)
    }



    return (
        <div  className={css.MoviesListMain}>
            <div>
                <button onClick={prevPage}>prev</button>
                <div>{currentPage}</div>
                <button onClick={nextPage}>next</button>
            </div>
            <div className={css.MoviesList}>
                {movies.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>


        </div>
    );
};

export {MoviesList};




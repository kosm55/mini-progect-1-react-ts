import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {useAppLocation} from "../hooks";
import {IMovie} from "../interfaces";
import {MovieInfo} from "../components";
import {movieService} from "../services";




interface IProps extends PropsWithChildren {

}

const MovieInfoPage: FC<IProps> = () => {
    const {state} = useAppLocation<{ movie: IMovie}>();
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState<IMovie>()

    useEffect(() => {
        if (state?.movie){
            setMovieInfo(state.movie)
        }else {
            if (id){
                movieService.getById(+id).then(({data})=> setMovieInfo(data))
            }
        }
    }, [id, state]);

    return (
        <div>
            {movieInfo && <MovieInfo movieInfo={movieInfo} />}
        </div>
    );
};

export {MovieInfoPage};
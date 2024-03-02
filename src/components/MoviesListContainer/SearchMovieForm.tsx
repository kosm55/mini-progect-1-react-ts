import {FC, PropsWithChildren, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import css from "./SearchMovieForm.module.css"
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    searchTitle: (title: string) => void
}

const SearchMovieForm: FC<IProps> = ({searchTitle}) => {
    const {reset,handleSubmit,register} = useForm();

    const search: SubmitHandler<any> =(data)=>{
        searchTitle(data.title)
        reset()
    }

    return (
        <form  className={css.form} onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'enter name movie..'} {...register('title')}/>
            <button>search</button>
        </form>
    );
};

export {SearchMovieForm};
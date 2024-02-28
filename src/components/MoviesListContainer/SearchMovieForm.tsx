import {FC, PropsWithChildren, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

interface IProps extends PropsWithChildren {

}

const SearchMovieForm: FC<IProps> = () => {
    const {reset,handleSubmit,register} = useForm();
    const [searchTitle, setSearchTitle] = useState<string>('')


    const search: SubmitHandler<any> =(data)=>{
        console.log(data.title)
        setSearchTitle(data.title)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'enter name movie..'} {...register('title')}/>
            <button>search</button>
        </form>
    );
};

export {SearchMovieForm};
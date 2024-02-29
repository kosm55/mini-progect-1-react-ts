import React, {FC, PropsWithChildren} from 'react';

import {useAppLocation} from "../hooks";
import css from "./PosterPreviewPage.module.css"
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const PosterPreviewPage: FC<IProps> = () => {
    const {state} = useAppLocation<{ poster_path: string }>();
    const navigate = useNavigate();

    return (
        <div className={css.Poster}>
            <button onClick={()=> navigate(-1)}>back</button>
            <img src={`https://image.tmdb.org/t/p/w500${state?.poster_path}`} alt='PosterPreview'/>
        </div>
    );
};

export {PosterPreviewPage};


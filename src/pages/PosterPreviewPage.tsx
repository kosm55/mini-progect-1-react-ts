import React, {FC, PropsWithChildren, useContext} from 'react';
import {useNavigate} from "react-router-dom";

import {useAppLocation} from "../hooks";
import css from "./PosterPreviewPage.module.css"
import {DarkModeContext} from "../hoc/ContextProvider";

interface IProps extends PropsWithChildren {

}

const PosterPreviewPage: FC<IProps> = () => {
    const {state} = useAppLocation<{ poster_path: string }>();
    const navigate = useNavigate();
    const darkModeContext = useContext(DarkModeContext);
    const { darkMode } = darkModeContext;

    return (
        <div className={darkMode? css.PosterDark : css.PosterWhite}>
            <button onClick={()=> navigate(-1)}>back</button>
            <img src={`https://image.tmdb.org/t/p/w500${state?.poster_path}`} alt='PosterPreview'/>
        </div>
    );
};

export {PosterPreviewPage};


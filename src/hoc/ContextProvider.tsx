import {createContext, FC, PropsWithChildren, useEffect, useState} from 'react';

import {ISetState} from "../types/setStateType";
import {IGenre} from "../interfaces";
import {genreService} from "../services";

interface IProps {
    darkMode: boolean,
    setDarkMode: ISetState<boolean>
}

const DarkModeContext = createContext<IProps>(null)
const GenreContext = createContext<IGenre[]>([])


const ContextProvider: FC<PropsWithChildren<{}>> = ({children}) => {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const [genres, setGenres] = useState<IGenre[]>([])


    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data.genres))
    }, []);

    return (
        <GenreContext.Provider value={genres}>
            <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
                {children}
            </DarkModeContext.Provider>
        </GenreContext.Provider>
    );
};

export {
    ContextProvider,
    DarkModeContext,
    GenreContext
};
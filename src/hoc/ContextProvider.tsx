import {createContext, FC, PropsWithChildren, useEffect, useState} from 'react';

import {ISetState} from "../types/setStateType";
import {IGenre} from "../interfaces/genreInterface";
import {genreService} from "../services";

interface IProps {
    darkMode: boolean,
    setDarkMode: ISetState<boolean>
    // setDarkMode: (mode: boolean) => void,
}
const DarkModeContext=createContext<IProps|null>(null)
const GenreContext=createContext<IGenre[]|null>(null)

const ContextProvider: FC<PropsWithChildren<{}>> = ({children}) => {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const [genres, setGenres] = useState<IGenre[]>( [])

    useEffect(() => {
        genreService.getAll().then(({data})=> setGenres(data.genres))
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
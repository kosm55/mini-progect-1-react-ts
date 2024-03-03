import {useSearchParams} from "react-router-dom";
import {useState} from "react";

interface IProps{
    page: string;
    currentPage: number;
    nextPage: () => void;
    prevPage: () => void;
}

const usePageQuery = (): IProps => {
    const [query, setQuery] = useSearchParams();
    const [currentPage, setCurrentPage] = useState<number>(1)
    const page=query.get('page')|| '1'


    const nextPage = () => setQuery(prevState => {
        const nextPage = (+prevState.get('page') + 1).toString();
        setCurrentPage(+nextPage);
        prevState.set('page', nextPage);
        return prevState;
    });


    const prevPage= ()  => setQuery(prevState => {
        const prevPage = (+prevState.get('page') - 1).toString();
        setCurrentPage(+prevPage);
        prevState.set('page', prevPage);
        return prevState;
    });
    return { page, currentPage, nextPage, prevPage };
}

export {
    usePageQuery
}
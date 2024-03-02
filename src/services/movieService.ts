import {IResp} from "../types";
import {IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";


const movieService={
    // getAll:  (page: string ='1'):IResp<{results: IMovie[]}> => apiService.get(urls.movies.base, {params: {page}}),

    getAll: (page: string = '1', totalPages: string): IResp<{ results: IMovie[] }> => apiService.get(urls.movies.base, { params: { page, total_pages: totalPages} }),
    getAllWithGenre: (page: string = '1', with_genres: string): IResp<{ results: IMovie[] }> => apiService.get(urls.movies.base, {params: {page, with_genres: with_genres}}),
    getById: (id: number):IResp<IMovie> => apiService.get(urls.movies.byId(id)),
    //getByTitle: ( title: string, query: string): IResp<{results: IMovie[]}>=> apiService.get(urls.search.byTitle(title), {params: { query}})
}

export {
    movieService
}
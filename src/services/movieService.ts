import {IResp} from "../types";
import {IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";


const movieService={
    getAll: (page: string = '1'): IResp<{ results: IMovie[] }> => apiService.get(urls.movies.base, { params: {page} }),
    getAllWithGenre: (page: string = '1', with_genres: string): IResp<{ results: IMovie[] }> => apiService.get(urls.movies.base, {params: {page, with_genres}}),
    getAllWithTitle: (page: string = '1', query: string): IResp<{ results: IMovie[] }> => apiService.get(urls.search.base, {params: {page, query}}),
    getById: (id: number):IResp<IMovie> => apiService.get(urls.movies.byId(id))
}

export {
    movieService
}
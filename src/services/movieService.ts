import {IResp} from "../types";
import {IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";


const movieService={
    getAll: (page: string ='1'):IResp<{results: IMovie[]}> => apiService.get(urls.movies.base, {params: {page}}),
    getById: (id: number):IResp<IMovie> => apiService.get(urls.movies.byId(id))
}

export {
    movieService
}
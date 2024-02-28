import {apiService} from "./apiService";
import {urls} from "../constants";
import {IResp} from "../types";
import {IGenre} from "../interfaces/genreInterface";

const genreService={
    getAll: (): IResp<{genres: IGenre[]}>=> apiService.get(urls.genres.base),
    getById: (id:number): IResp<IGenre> => apiService.get(urls.genres.byId(id))
}

export {
    genreService
}
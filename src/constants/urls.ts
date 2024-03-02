const baseURL='https://api.themoviedb.org/3'

const movies='/discover/movie'
const genres='/genre/movie/list'
// const search= '/search/movie'
const auth= '/authentication'


const urls={
    movies: {
        base: movies,
        byId: (movie_id:number):string=> `/movie/${movie_id}`
    },
    genres: {
        base: genres,
        byId: (genre_id: number):string=> `/genre/${genre_id}`
    },
    // search: {
    //     base: search,
    //     byTitle: (title: string): string=> `/search/movie/${title}`
    // }
}


export {
    baseURL,
    urls
}
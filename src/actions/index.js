export const movieLoaded = (newMovie) => {
    return {
        type: 'MOVIE_LOADED',
        payload: newMovie
    };
};
export const writeSearch = (newSearch) => {
    return {
        type: 'WRITE_SEARCH',
        payload: newSearch
    };
};
export const filterMovie = (newSearch) => {
    return {
        type: 'FILTER_MOVIE',
        payload: newSearch
    };
};
export const filterMovieScreen = (newSearch) => {
    return {
        type: 'FILTER_MOVIE_SCREEN',
        payload: newSearch
    };
};

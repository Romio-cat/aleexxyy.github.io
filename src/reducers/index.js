const initialState = {
    filterMovie: null,
    movie: [],
    search: '',
    filter: [],
};
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MOVIE_LOADED':
            return {
                ...state,
                movie: action.payload,
                
            };
        case 'WRITE_SEARCH':
            return {
                ...state,
                search: action.payload,
               
            };
        case 'FILTER_MOVIE':
        return {
            ...state,
            filter: action.payload,
            
        };
        case 'FILTER_MOVIE_SCREEN':
            return {
                ...state,
            filterMovie: action.payload,
            };
           default:
               return state 
        }
}
export default reducer;
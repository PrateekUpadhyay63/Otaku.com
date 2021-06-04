const intialState = {
    genre: [],
    fetching: false,
    search:''
}
export const genreReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'MOVIE_GENRE':
            return { ...state, genre: state.genre.concat(action.results) }
        case 'FETCHING_GENRE':
            return { ...state, fetching: action.fetching }
        case 'RESET_SEARCH':
            return { ...state, genre: [] }
        case 'SEARCH_GENRE':
            return {...state,search:action.search}
        default:
            return state;
    }
}
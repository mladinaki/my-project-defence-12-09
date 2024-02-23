const reducer = (state, action) => {
    switch (action?.type) {

        case 'GET_ALL_GAMES':
            return [...action.peyload];

        case 'ADD_COMMENT':
            return [...state, action.peyload];
        default:
            return state
    }
}

export default reducer;
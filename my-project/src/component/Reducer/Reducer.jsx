
const INIT_STATE = {
    cars: []
}

const reducer = (state, action) => {
    switch (action?.type) {

        case 'GET_ALL_COMMENT':
            
            return [...action.payload];

        case 'ADD_COMMENT':
            return [...state, action.payload];


        case 'RMV_COMMENT':
            const remoweItem =  state.filter((c) => c._id !== action.payload.shoseId)
            return remoweItem;


        case 'EDIT_COMMENT': {
            return state.map((c) => c._id === action.payload._id ? { ...c, shoseData: action.payload.shoseData } : c);
        }

        default:
            return state
    }
}

export default reducer;
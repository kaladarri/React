const initialState = {
    min:1,
    max:10
}

export default function(state=initialState, action){
    switch(action.type){
        case 'NUM_MIN_ALTERADO':
            return{
                ...state,
                min:parseInt(action.payload)
            }
        case 'NUM_MAX_ALTERADO':
            return{
                ...state,
                max:parseInt(action.payload)
            }
        default:
                return state
    }
}
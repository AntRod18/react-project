const initialState = {
     list: []
}

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case "Add-List":
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case "Get_Lists":
            return {
                ...state,
                list: [...state.list, ...action.payload]
            }

        default:
            return state
    }
}

export default listReducer
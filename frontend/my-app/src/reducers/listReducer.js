const initialState = {
     list: []
}

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case "Add-List":
            return {
                ...state,
                parts: [...state.list, action.payload]
            }
        default:
            return state
    }
}

export default listReducer
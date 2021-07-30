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
                list: [...action.payload]
            }
            case "Add-Components":
                const index = state.list.findIndex(l => l.id === action.payload.list_id)
                const updatedList = {
                    ...state.list[index],
                    components: [...state.list[index].components, action.payload]
                }
                return{
                    
                    ...state,
                    list: [...state.list.slice(0,index), updatedList, state.list.slice(index+1)]
        
                }

        default:
            return state
    }
}

export default listReducer
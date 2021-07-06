export const initialState = {
    parts: []
}


const partsReducer = (state = initialState, action) => {
   switch(action.type){
       case "Show-Parts":
           return {
               ...state,
               parts: [...state.parts, action.payload]
           }
           case "Get_Parts":
               return{
                   ...state,
                   parts: [...state.parts, ...action.payload]
               }
       default:
           return state
   }
}

export default partsReducer
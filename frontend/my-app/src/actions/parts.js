

export const showParts = (partObj) => {
    return{
        type: "Show-Parts",
        payload: partObj
    }
}

export const fetchParts = () => {
    return (dispatch) => {
        
        fetch("http://localhost:3001/parts")
            .then(resp => resp.json())
            .then(parts => {
                dispatch({
                    type: "Get_Parts",
                    payload: parts
                })
            })
    }
    
}
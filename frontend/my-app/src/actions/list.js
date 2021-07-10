

export const addList = (listObj) => {
    return{
        type:"Add-List",
        payload: listObj
    }
}

export const createList = (list) => {
    return (dispatch) => {
        fetch("http://localhost:3001/lists", {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({list}),
        })
        .then(resp => resp.json())
        .then(list => {
            dispatch(addList(list))
        })
    }
}

export const fetchLists = () => {
    return (dispatch) => {
        
        fetch("http://localhost:3001/lists")
            .then(resp => resp.json())
            .then(list => {
                dispatch({
                    type: "Get_Lists",
                    payload: list
                })
                
            })
    }
    
}
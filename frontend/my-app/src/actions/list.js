

export const addList = (listObj) => {
    return{
        type:"Add-List",
        payload: listObj
    }
}

export const addComponents = (compObj) => {
    return{
        type:"Add-Components",
        payload: compObj
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

export const createComponents = (component) => {
    return (dispatch) => {
        fetch("http://localhost:3001/components", {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({component}),
        })
        .then(resp => resp.json())
        .then(c => {
            dispatch(addComponents(c))
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
export const addTheValue = (data) => {
    return {
        type : "Add_value",
        payload : {
            id: Math.random().toString().substr(9,3),
            data:data
        }
    }
}

export const deleteTheValue = (id) => {
    return {
        type : "Delete_value",
        id 
        }
    }

    
export const removeAll =() => {
    return {
        type : "Remove_all",
         

    }
}
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const  fetchPosts = ()=>{

    return async function (dispatch){

        const response = await jsonPlaceHolder.get('/posts')
       
        dispatch ({ type: 'FETCH_POST' ,
        payload: response.data })
    }


}

export const  fetchUsers = ( id)=>{

    return async function (dispatch){

        const response = await jsonPlaceHolder.get(`/users/${id}`)
       
        dispatch ({ type: 'FETCH_USER' ,
        payload: response.data })
    }


}
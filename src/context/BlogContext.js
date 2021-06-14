import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
    switch (action.type){
        case 'get_blogposts':
            return action.payload
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost
            })
        default: 
            return state
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts')

        dispatch({type: 'get_blogposts', payload: response.data})
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => { // bu fonksiyonu async yapip api istegini trycatch icine alirdik olsaydi
        await jsonServer.post('/blogposts', {title: title, content: content})

        //dispatch({type: 'add_blogpost', payload: {title: title, content: content}})  buna gerek kalmadi cunki indexScreende getBlogPosts cagiriliyor ayni kod
        if(callback){
            callback()
        }
    }
}
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => { // bu fonksiyonu async yapip api istegini trycatch icine alirdik olsaydi
        dispatch({type: 'edit_blogpost', payload: {id: id, title: title, content: content}})
        if(callback){
            callback() 
        }
    }
}

export const {Context, Provider} = createDataContext(
     blogReducer,
     {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
     []
    )

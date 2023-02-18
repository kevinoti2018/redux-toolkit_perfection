import {createSlice,nanoid} from '@reduxjs/toolkit'
import {sub} from 'date-fns'
const initialState = [
    {id:1,
        title:'first post',
        content:'hello',
        date:sub(new Date(), {minutes:10}).toISOString() ,
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }   
    },
    {id:2,
        title:'second post',
        content:'world'
        ,date:sub(new Date(), {minutes:5}).toISOString() ,
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }   

}
]
const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
         postAdded:{
        reducer(state, action) {
            state.push(action.payload)
        },
        prepare(title,content,userId){
            return{
                payload:{
                    id :nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(), 
                    userId,
                    reactions:{
                        thumbsUp:0,
                        wow:0,
                        heart:0,
                        rocket:0,
                        coffee:0
                    }   
                }
            }
        }
    },
        reactionAdded(state,action){
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        },
        postUpdated(state,action){
            const{id,title,content} = action.payload
            const existPost = state.posts.find(post=>post.id===id)
            if(existPost){
                existPost.title = title
                existPost.conent = content
            }
        }
    }
})

export const {postAdded,postUpdated,reactionAdded} = postSlice.actions
export default postSlice.reducer
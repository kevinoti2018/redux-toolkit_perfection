import React,{useState} from 'react'
import { useDispatch,useSelector} from 'react-redux';

const EditPost = (match) => {
    const matchId = match.params
    const post = useSelector(state=>state.posts.find(post=>post.id===matchId))
    const dispatch = useDispatch()
  return (
    <div>
    
    </div>
  )
}

export default EditPost
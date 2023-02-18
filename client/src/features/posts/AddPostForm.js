import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {postAdded} from './postSlice'
import { selectAllUsers } from './../users/usersSlice';
const AddPostForm = () => {
    const[title,setTitle] = useState('')
    const[content,setContent] = useState('')
    const[userId,setUserId] = useState('')
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const onTitleChange = e=> setTitle(e.target.value)
    const onContentChange = e=> setContent(e.target.value)
    const onAuthorChange = e=> setUserId(e.target.value)
    
    const onSaveClicked =()=>{
      if(title && content){
        dispatch(
          postAdded(title,content,userId)
        )
        setTitle('')
        setContent('')
      }
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const userOptions = users.map(user=>(
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ))
  return (
    <div>
    <h2>Add a new post</h2>
       <form>
       <label htmlFor='postTitle'>Post title</label>
        <input
            type='text'
            name='postTitle'
            id='postTitel'
            value={title}
            onChange={onTitleChange}
            />

        <label htmlFor='postAuthor'>Post Author</label>
        <select id='postAuthor' value={userId} onChange={onAuthorChange}>
          <option value = ''></option>
          {userOptions}
        </select>
       <label htmlFor='postTitle'>Post title</label>
        <input
            type='text'
            name='postTitle'
            id='postTitel'
            value={content}
            onChange={onContentChange}
            />
            <button type='button' 
             onClick={onSaveClicked}
             disabled={!canSave}
             >Save post</button>
        </form> 
    </div>
  )
}

export default AddPostForm
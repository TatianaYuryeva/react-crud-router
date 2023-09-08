import { useState } from "react"

import Close from "./Close"

export default function EditPostForm({post, navigateTo, setEditStatus, onEdit}) {
  const [postText, setPostText] = useState(post.content) 

  const editPost = async (e) => {
    e.preventDefault()

    const response = await fetch(`http://localhost:7070/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: postText})
    })

    setPostText('')
    setEditStatus(false)
    onEdit()
    setTimeout(() => navigateTo(`/posts/${post.id}`), 300)
  }

  return (
    <form className="form" onSubmit={editPost}>
      <Close navigateTo={navigateTo} link={`/posts/${post.id}`} setEditStatus={setEditStatus} />
      <label htmlFor="post-text">Редактировать пост</label>
        <textarea 
          value={postText}
          onChange={e => setPostText(e.target.value)}
          id="post-text"
          cols="30" 
          rows="6"
          required
          >
        </textarea>
        <button className="btn form__btn">Сохранить</button>
      </form>
  )
}
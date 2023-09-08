import { useState } from "react"

export default function NewPost({navigateTo, onAddPost}) {
  const [postText, setPostText] = useState('')

  const addPost = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: postText})
    })

    setPostText('')
    onAddPost()
    setTimeout(() => navigateTo("/"), 300)
  }

  return (
    <form className="form" onSubmit={addPost}>
      <label htmlFor="post-text">Новый пост</label>
        <textarea 
          value={postText}
          onChange={e => setPostText(e.target.value)}
          id="post-text"
          cols="30" 
          rows="6"
          required>
        </textarea>
        <button className="btn form__btn">Опубликовать</button>
      </form>
  )
}
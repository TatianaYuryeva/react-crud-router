import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

import './App.css'

import List from './components/List'
import NewPostForm from './components/NewPostForm'
import EditPost from './components/EditPost'

function App() {
  const [posts, setPosts] = useState([])
  const [isEdit, setEdit] = useState(false)
  const navigateTo = useNavigate()

  const fetchPosts = async () => {
    const response = await fetch('http://localhost:7070/posts')
    const data = await response.json()

    setPosts(data)
  }

  const deletePost = async (id) => {
    const response = await fetch(`http://localhost:7070/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    fetchPosts()
    navigateTo("/")
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
      <div className="page">        
          <Routes>
            <Route path="/" element={<List posts={posts}/>} />
            <Route path="/posts/new" element={<NewPostForm navigateTo={navigateTo} onAddPost={fetchPosts}/>} />
            <Route path="/posts/:id" element={<EditPost posts={posts} navigateTo={navigateTo} onDelete={deletePost} setEditStatus={setEdit} isEdit={isEdit} onEdit={fetchPosts}/>} />
          </Routes>
      </div>
  )
}

export default App

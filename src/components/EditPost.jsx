import { useParams } from 'react-router-dom';

import EditPostForm from './EditPostForm';
import EditPostCard from './EditPostCard';

export default function EditPost({ posts, navigateTo, onDelete, setEditStatus, isEdit, onEdit }) {

  const { id } = useParams();
  const post = posts.find(post => post.id === Number(id))

    return (
      <>
        {!isEdit ? 
        <EditPostCard post={post} navigateTo={navigateTo} onDelete={onDelete} setEditStatus={setEditStatus}/> : 
        <EditPostForm post={post} navigateTo={navigateTo} setEditStatus={setEditStatus} onEdit={onEdit} />}
      </>
    )
}
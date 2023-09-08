import Post from "./Post";
import Close from './Close';

export default function EditPostCard({ post, navigateTo, onDelete, setEditStatus }) {

    return (
      <>
        <Post post={post}>
          <Close navigateTo={navigateTo} link='/' setEditStatus={undefined}/>
          <div className='post__btns'>
            <button className="btn post__edit-btn" onClick={() => setEditStatus(true)}>Изменить</button>
            <button className="btn post__delete-btn" onClick={() => onDelete(post.id)}>Удалить</button>
          </div>
        </Post>
      </>
    ) 
}
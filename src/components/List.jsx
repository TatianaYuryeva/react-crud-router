import { Link } from "react-router-dom";

import Post from "./Post";

export default function List({posts}) {

  return (
    <>
      <ul className="posts-list">
        {posts.map(item =>  (
              <li key={item.id}>
                <Post post={item}/>
              </li>
            ))}
      </ul>
      <Link to="/posts/new" className="btn add-post-btn">Создать пост</Link>
    </>
  )
}
import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/ru'

import avatar from '../img/avatar.jpg'

dayjs.locale('ru')
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export default function Post({post, children}) {

  return (
    <div className="post">
      <Link to={`/posts/${post.id}`}> 
        <div className="post__header">
          <img className="post__header__user-avatar" src={avatar} alt="user avatar" />
          <div className="post__header__info">
            <p>Иван Иванов</p>
            <p className='post__header__info__date'>{dayjs(post.created).fromNow()}</p>
          </div>       
        </div>
        <div className='post__text'>{post.content}</div> 
        </Link>
      {children}     
    </div>   
  )
}
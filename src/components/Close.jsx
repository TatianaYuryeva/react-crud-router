export default function Close({navigateTo, link, setEditStatus}) {

    return (
          <div className='post__close' onClick={() => {
            navigateTo(link)
            setEditStatus ? setEditStatus(false) : undefined
          }}>+</div>
    )
}
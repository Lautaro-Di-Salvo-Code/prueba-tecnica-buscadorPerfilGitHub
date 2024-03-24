
const WithoutReq = "https://avatars.githubusercontent.com/u/15274247?v=4"

export const UserInfo = ({prophile}) => {
  return (
    <article className='div-infoUser'>
      <img className='img-git' src={prophile.avatar_url || WithoutReq } alt="" />
    
    <div className='div-infoUser__div'>

      <b>Followers | <p className='div-after__request'>{prophile.followers || 0}</p> </b>
    </div>


    <div className='div-infoUser__div'>
      <b>Following | <p className='div-after__request'>{prophile.following || 0}</p> </b>

    </div>
    <div className='div-infoUser__div'>
      <b>Location | <p className='div-after__request'>{prophile.location || "..."}</p></b>

    </div>
  </article>
  )
}

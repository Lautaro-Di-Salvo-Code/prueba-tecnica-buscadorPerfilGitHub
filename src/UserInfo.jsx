
const WithoutReq = "https://avatars.githubusercontent.com/u/15274247?v=4"
const gifReload = "https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_256.gif"
const gifReload2 = "https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"

export const UserInfo = ({ prophile, load }) => {
  return (
    <article className='div-infoUser'>

      {
        load && (
          <>
            <img className='img-git' src={gifReload2} alt="" />
            <div className='div-infoUser__div'>

              <b>Followers | <p className='div-after__request'>...</p> </b>
            </div>


            <div className='div-infoUser__div'>
              <b>Following | <p className='div-after__request'>...</p> </b>

            </div>
            <div className='div-infoUser__div'>
              <b>Location | <p className='div-after__request'>...</p></b>

            </div>


          </>
        )
      }

      {
        !load && (

          <>
      <img className='img-git' src={prophile.avatar_url || WithoutReq} alt="" />

      <div className='div-infoUser__div'>

        <b>Followers | <p className='div-after__request'>{prophile.followers || 0}</p> </b>
      </div>


      <div className='div-infoUser__div'>
        <b>Following | <p className='div-after__request'>{prophile.following || 0}</p> </b>

      </div>
      <div className='div-infoUser__div'>
        <b>Location | <p className='div-after__request'>{prophile.location || "..."}</p></b>

      </div>
          
          </>
        )
      }
    </article>
  )
}


export const Repos = ({userRepo, load}) => {
  return (
    <>
        

    {/* CUANDO NO HAY NADA CARGADO COMO USUARIO */}
    {!load && userRepo.message === "Not Found" && 
   (<article className='article__repositories__styles' >
   <div className='titles-repoUser'>
     <a style={{fontSize: "1.3rem"}} href="" target="_blank">
     <p>Repositorio x</p>
     </a>
       <p  className='Description-projects'>Info Repositorio</p>
   </div>
   <div className='licence-andOtrhervalue'>
     <p>MIT Licience</p>
     <div style={{display: "flex" , gap: "5px"}}>

     <img style={{height: "auto", width: "1.5rem"}}
      src={`https://cdn.iconscout.com/icon/free/png-512
      /free-git-fork-3603485-3003810.png?f=webp&w=256`} alt="" />
     <p>Forks </p>
     </div>
     <p></p>
     <p>Stars</p>
   </div>
 </article>)
     }
     {/* CUANDO ESTAN CARGADOS LOS REPOSITORIOS */}
 { userRepo.length > 2 && userRepo.map(e => (
    <article className='article__repositories__styles' key={e?.id}>
    <div className='titles-repoUser'>
      <a style={{fontSize: "1.3rem"}} href={e.html_url} target="_blank">
      <p>{e?.name || "Repositorio x"}</p>
      </a>
        <p  className='Description-projects'>{e?.description|| "Info Repositorio"}</p>
    </div>
    <div className='licence-andOtrhervalue'>
      <p>MIT Licience</p>
      <div style={{display: "flex" , gap: "5px"}}>

      
      <p>Forks: {e.forks}</p>
      </div>
      <p></p>
      <p>Stars</p>
    </div>
  </article>
    )) }  
    </>
  )
}

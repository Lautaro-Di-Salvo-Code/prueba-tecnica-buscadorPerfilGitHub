import {  useEffect, useState } from 'react'
import './App.css'
import { UserInfo } from './UserInfo'

function App() {


  const [username, setUsername] = useState("")
  const [prophile, setProphile] = useState({})
  const [userRepo, setUserRepo] = useState([])
// esta separado en string y en array por el tipo de valores que deseo devolver
  

const PeticionPerfil = async () => { 
  const req = await fetch(`https://api.github.com/users/${username}`)
  const res = await req.json()
  console.log(res)

  setTimeout(() => {
    
    setProphile(res)
  }, 1000);
  }
  // usé dos funciones por separado por la diferencia de cantidad de informacion que viene en cada peticion
  const PeticionRepo =  async () => { 
    const req2 = await fetch(`https://api.github.com/users/${username}/repos`)
    const res2 = await req2.json()
    console.log(res2)
    // console.log(Boolean(res2))
    setTimeout(() => {
    
      setUserRepo(res2)
    }, 1000);
  }
// LA PETICION LLEGÓ A SU MAXIMO A LAS 6:37
  useEffect(() => {
    PeticionRepo()

  }, [])
  

  const SearchUser = (e) => { 
    setUsername(e.target.value)
    }
  


    

  return (
    <>
    <header className='header-styles'>
        <div className='div-inputTextAndEnter'>
          <input className='input' type="search" 
          name="inputusername"
          autoComplete='on'
          // Acá estuve tratando de hacer las dos peticiones con un solo enter pero no me funcionaba 
          // ningun metodo que se me ocurria
          // onKeyDown={(e)=> { e.code === "Enter" ? EjecuteBothRequest: null} }
          onChange={SearchUser} 
          placeholder=' Write the github user' />
          {/* Decidí hacer dos botones aparte, no los tenia previstos */}
          <button className='button-search' onClick={PeticionRepo}>Search Repository</button>
          <button className='button-search' onClick={PeticionPerfil}>Search Userinfo</button>
        </div>
    </header>

    <UserInfo prophile={prophile} />
    <article style={{marginBottom: "3rem"}} >
    <div className='article-section__titleResposUser'>

      <section className='titleResposUser'>
        
      <div >
       
          <h2 >{prophile?.login || "GitHub" }</h2>
        
          
      </div>
      <div>

        <p className='titleResposUser-howpeople'>How people build software.</p>
      </div>
      </section>
    </div>
      
      <section className='InfoResposUser'>
      {userRepo.length === 2 && 
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
          </section>
    </article>
    </>
  )
}

export default App

import {  useEffect, useState } from 'react'
import './App.css'
import { UserInfo } from './UserInfo'
import { Load } from './Load/Load'
import { Repos } from './Components/Repos'
import { UserGithubName } from './Components/User'
import { RequestLimit } from './Components/RequestLimit'
import { InputSearch } from './Components/InputSearch'

function App() {


  const [username, setUsername] = useState("")
  const [prophile, setProphile] = useState({})
  const [userRepo, setUserRepo] = useState([])
  const [load, setLoad] = useState(false)
// esta separado en string y en array por el tipo de valores que deseo devolver
  

const PeticionPerfil = async () => { 
  setLoad(true)
  const req = await fetch(`https://api.github.com/users/${username}`)
  const res = await req.json()
  // console.log(res)
  
  setTimeout(() => {
    
    setProphile(res)
    setLoad(false)
  }, 1000);
  }
  // usé dos funciones por separado por la diferencia de cantidad de informacion que viene en cada peticion
  const PeticionRepo =  async () => { 
    setLoad(true)
    const req2 = await fetch(`https://api.github.com/users/${username}/repos`)
    const res2 = await req2.json()
    // console.log(res2)
    // console.log(Boolean(res2))
    setTimeout(() => {
    
      setUserRepo(res2)
      setLoad(false)
    }, 1000);
  }
// LA PETICION LLEGÓ A SU MAXIMO A LAS 6:37
  useEffect(() => {
    PeticionRepo()
    // PeticionPerfil()
  }, [])
  

  const SearchUser = (e) => { 
    setUsername(e.target.value)
    }

  return (
    <>
    <InputSearch  
     PeticionPerfil={PeticionPerfil}
      PeticionRepo={PeticionRepo}
      SearchUser={SearchUser}
      />

    <UserInfo prophile={prophile} />
    {/* CUANDO NO HAY NADA CARGADO COMO USUARIO */}
    <article style={{marginBottom: "3rem"}} >
    <UserGithubName prophile={prophile}/>

    { load && <Load/>  }
    {/* Cuando las peticiones llegaron a su limite */}
    <RequestLimit userRepo={userRepo}/>


      <section className='InfoResposUser'>
      
        
          <Repos userRepo={userRepo} load={load}/>
          </section>
    </article>
    </>
  )
}

export default App


export const InputSearch = ({PeticionPerfil, PeticionRepo, SearchUser }) => {
  return (
    <div>
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
          <button className='button-search' onClick={PeticionPerfil}>🔍 Search Prophile</button>
        </div>
    </header>

    </div>
  )
}

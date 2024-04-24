
export const UserGithubName = ({prophile}) => {

    
    return (
        <div>
            <div className='article-section__titleResposUser'>

                <section className='titleResposUser'>

                    <div >
                        <a href={prophile.html_url} target="_blank" rel="noopener noreferrer">

                            <h2 >{prophile?.login || "GitHub"}</h2>
                        </a>


                    </div>
                    <div>

                        <p className='titleResposUser-howpeople'>How people build software.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

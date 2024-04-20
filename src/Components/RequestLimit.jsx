
export const RequestLimit = ({userRepo}) => {
  return (
    <>
    {userRepo.message === 
      "API rate limit exceeded for 190.246.99.222. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"
     && ( <h1 style={{display: "flex" , justifyContent: "center", margin: "auto", padding: "3rem"}}>Wait a few minutes, the API request limit has been reached </h1> )}
    </>
  )
}

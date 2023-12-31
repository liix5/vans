import { redirect } from "react-router-dom"


//* we dont really need to make it an async func here but usually with real life auth it has to be async
export async function requireAuth(request) {
   const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem('loggedin')
    
    
    console.log(isLoggedIn)
    if (!isLoggedIn) {
      const response = redirect(`/login?message=You must log in first.&redirectTo=${pathname}`)
      response.body = true  // It's silly, but it works
      throw response
    }
    return null
}  

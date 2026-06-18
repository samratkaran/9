import { useState } from "react"
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import { useEffect } from "react"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from "./components"
import { BrowserRouter } from "react-router-dom"




function App() {
  const [loading, setLoading] = useState(true)
  const dispatch =  useDispatch()
  
 
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [dispatch])



  if(loading){
    return <div>loading....</div>
  }else{
    return <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className="w-full block">
     <BrowserRouter>
       <Header/>
      <main>
        {/* <Outlet/> */}
        
      </main>
      <Footer/>
     </BrowserRouter>
    </div>
      
    </div>
  }
}

export default App

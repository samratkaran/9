import { useState } from "react"
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import { useEffect } from "react"



function App() {
  const [loading, setLoading] = useState(true)
  const dispatch =  useDispatch()
  
  useEffect(()=>{
    authService.getCurrentUser()
    .then()
    .catch((err)=>console.log(err ,'error in authService'))
  }, [])

  return (
  <>
    <h1>hello</h1>
  </>
  )
}

export default App

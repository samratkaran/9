import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

export default function ProtectedLayout({children , authentication = true}) {
    const navigate = useNavigate()
    const [loader ,setLoader] = useState(true)
    const authStatus = useSelector(state => state.status)
 // need to check if user is authenticated or not and then redirect to login page if not authenticated and also want to recheck and how is this file work
    useEffect(()=>{
        if(authentication && authStatus !== authentication){
        navigate('/login')
        }else if(!authentication && authStatus !== authentication){
            navigate('/')
        } 
        setLoader(false)
    },[navigate, authStatus ,authentication])
        

return loader ? (<p>...loading</p>) : <>{children}</>
}



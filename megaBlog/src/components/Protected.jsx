import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

export default function Protected({children , authentication = true}) {
    const navigate = useNavigate()
    const [loader ,setLoader] = useState(true)
    const authStatus = useSelector(state => state.status)

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



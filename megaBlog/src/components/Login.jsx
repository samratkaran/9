import { login as storeLogin } from "../store/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../appwrite/auth";
import {useDispatch} from 'react-redux'
import  {useForm} from 'react-hook-form'


const Login = () => {
    const navigat = useNavigate()
    const dispatch = useDispatch()
    const { register,handleSubmit } = useForm()
    const [error  , setError] = useState('')

    const login = async(data)=>{
        setError("")
        try {
          const session =  await authService.login(data)
          if(session){
           const userData = await authService.getCurrentUser()
            if(userData) dispatch(storeLogin(userData))
                navigat('/')
          }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Login

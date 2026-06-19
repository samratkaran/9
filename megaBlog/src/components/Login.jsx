import { login as storeLogin } from "../store/authSlice";
import {  useNavigate ,Link } from "react-router-dom";
import { useState } from "react";
import authService from "../appwrite/auth";
import {useDispatch} from 'react-redux'
import  {useForm} from 'react-hook-form'
import {Button, Logo} from './index'
import Input from "./input";


const Login = () => {
    const navigat = useNavigate()
    const dispatch = useDispatch()
    const { register,handleSubmit } = useForm()
    const [error  , setError] = useState('')

    const formSubmit = async(data)=>{
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
<div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-52">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(formSubmit)} className='mt-8'>
            <div className="sapce-y-5">
            <Input
                lable='Email:'
                placeholder= 'Enter your Email:'
                type="email"
                {...register('email',{
                    required:true,
                    validate:{
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
            />
            <Input
                lable='password'
                placeholder ='Enter your password'
                type="password"
                {...register("password" , {
                    required:true,
                    pattern:{
                        value:/regex/,
                        message:'please enter valid password'
                    }
                })}
            />
            <Button
            type="submit"
                className="w-full"
            >
                Sign In
            </Button>
            
            </div>
        </form>
        </div>
    </div>
)
}

export default Login

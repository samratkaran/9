import  {useState} from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [name, setName] = useState('')
    const [pass , setPass] = useState('')

    const {setUser}  = useContext(UserContext)

    const submitHandler = (e)=>{
        e.preventDefault()
        setUser({name, pass})
        
        console.log('sbumit clicked')
    }
  return (
    <div className='w-[50%] bg-gray-500 text-amber-50 flex flex-col justify-center items-center border-2 border-black'>

    <h1>Login Form</h1>
    <input type="text" placeholder='UserName' value={name} onChange={(e)=>setName(e.target.value)} />
    <input type="password" placeholder='password' value={pass} onChange={(e)=> setPass(e.target.value)} />
    <button onSubmit={submitHandler} onClick={submitHandler}>Submit</button>
      
    </div>
  )
}

export default Login

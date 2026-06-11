import  {useState} from 'react'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

const LoginUnder = () => {

    const [username, setUserName] = useState('')
    const [password , setPassword] = useState('')

    const {setUnderUser}  = useContext(UserContext)

    const submitHandler = (e)=>{
        e.preventDefault()
        setUnderUser({username, password})
        
        console.log('sbumit clicked')
    }
  return (
    <div className='w-[50%] bg-gray-500 text-amber-50 flex flex-col justify-center items-center border-2 border-black'>

    <h1>Login Form</h1>
    <input type="text" placeholder='UserName' value={username} onChange={(e)=>setUserName(e.target.value)} />
    <input type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
    <button onSubmit={submitHandler} onClick={submitHandler}>Submit</button>
      
    </div>
  )
}

export default LoginUnder

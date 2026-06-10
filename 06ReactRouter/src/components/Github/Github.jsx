
// import { useState } from 'react'
// import { useEffect } from 'react'
import { useLoaderData } from "react-router"

const Github = () => {
    const user = useLoaderData()
    // const [user, setUser] = useState('')
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/samratkaran')
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         console.log(data)
    //         setUser(data)})
    // },[])
  return (
    <div className='bg-gray-700 text-blue-100 text-center text-2xl p-4'>
      Github Followers : {user.followers}
      <img src={user.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const infoLoder = async ()=>{
   const response = await fetch('https://api.github.com/users/samratkaran')
   return response.json()
}

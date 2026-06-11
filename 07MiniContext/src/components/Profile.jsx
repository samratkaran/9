import UserContext from "../context/UserContext"
import { useContext } from "react"
const Profile = () => {

    const {user} = useContext(UserContext)
  
    if(!user) return <h1>Please Login</h1>
    return <h2>welcome {user.name}</h2>
}

export default Profile

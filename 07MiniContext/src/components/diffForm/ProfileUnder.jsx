import UserContext from "../../context/UserContext"
import { useContext } from "react"
const ProfileUnder = () => {

    const {underuser} = useContext(UserContext)
  
    if(!underuser) return <h1>Please Login</h1>
    return <h2>welcome {underuser.username}</h2>
}

export default ProfileUnder

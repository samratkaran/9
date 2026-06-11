import { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [underuser, setUnderUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser , underuser , setUnderUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider



1. First we create Context folder and under that a UserContext.js 
it is purly JS file so we dont use JSX

import React from "react"

const UserContext =  React.createContext()

export default UserContext

2.then we create UserContextProvider.jsx

import UserContext from "./UserContext";


const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

this is the code for Use



to use context API first we create store with UserContext.js
then we create UserContextProvider.jsx
in this provide we make useState to manage things 
as i have showed in my project i am taking two diffrent form where if i want to take value for 2nd form so i have to creat seprate state for that and then pass it 




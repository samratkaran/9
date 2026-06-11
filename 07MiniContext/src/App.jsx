import LoginUnder from "./components/diffForm/LoginUnder"
import ProfileUnder from "./components/diffForm/ProfileUnder"
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {
 

  return (
  <UserContextProvider>
    <h1 className="text-center text-amber-900">hello</h1>
    <Login/>
    <Profile/>

    <div className="bg-red-200 mt-20">
<LoginUnder/>
<ProfileUnder/>
    </div>
  </UserContextProvider>
  )
}

export default App

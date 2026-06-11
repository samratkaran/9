import Login from "./components/Login"
import UserContextProvider from "./context/UserContextProvider"


function App() {
 

  return (
  <UserContextProvider>
    <h1 className="text-center text-amber-900">hello</h1>
    <Login/>
  </UserContextProvider>
  )
}

export default App

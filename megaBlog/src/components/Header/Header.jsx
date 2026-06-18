import {Container, LogoutBtn ,Logo} from "../index"
import { Link ,useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"


const Header = () => {
  
  const authStatus = useSelector((state)=>state.status)
  console.log(authStatus)
  const navigate = useNavigate()

  const navItems = [
    {name:"Home",
      slug:'/',
      active:false
    },
     {name:"Login",
      slug:'/login',
      active:!authStatus
    },
     {name:"signup",
      slug:'/signup',
      active:!authStatus
    },
     {name:"All Posts",
      slug:'/all-posts',
      active:authStatus
    },
     {name:"Add Post",
      slug:'/add-post',
      active:authStatus
    },

  ]
  return (
   
     <header className="py-3 shadow bg-gray-400">
      <Container>
        <nav className="flex">
      <div className="mr-4">
        <Link to='/'>
          <Logo width="70px" />
        </Link>
      </div>
      <ul className="flex ml-auto">
        {navItems.map((val)=>(
          val.active ? (
            <li key={val.name}>
            <button 
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={()=>{
            console.log(val.slug)
            navigate(val.slug)}}>{val.name}</button>

            </li>
          ) : null
        ))}
        {authStatus && (
          <li>
           <LogoutBtn/>
          </li>
        )}
      </ul>
        </nav>
      </Container>
    </header>
  
  )
}

export default Header

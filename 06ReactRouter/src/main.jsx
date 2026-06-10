import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { infoLoder } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {path:'',
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>

//       },
//         {
//         path:"contact",
//         element:<Contact/>

//       }
//     ]}
// ])

// One more way to write this route nesting

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      {/* <Route path='github' element={<Github/>}/> */}
      <Route 
      loader={infoLoder}
      path='github'
       element={<Github/>}

       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
 {/* <RouterProvider router={router}/> */}
 <RouterProvider router={route}/>
  </StrictMode>,
)

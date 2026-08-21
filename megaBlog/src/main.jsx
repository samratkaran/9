
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider} from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { Login, Protected } from './components/index.js'
import SignUp from './pages/Singup.jsx'
import AllPosts from './pages/Allposts.jsx'
import Addpost from './pages/Addpost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'




const router = createBrowserRouter([
  {path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:(
          <Protected authentication={false}>
            <Login/>
          </Protected>
        )
      },
      {
        path:"/signup",
        element:(
          <Protected authentication={false}>
            <SignUp/>
          </Protected>
        )

      },
       {
            path: "/all-posts",
            element: (
                <Protected authentication>
                    {" "}
                    <AllPosts />
                </Protected>
            ),
        },
         {
            path: "/add-post",
            element: (
                <Protected authentication>
                    {" "}
                    <Addpost />
                </Protected>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Protected authentication>
                    {" "}
                    <EditPost />
                </Protected>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ]
  }
])



createRoot(document.getElementById('root')).render(

 
  <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
 
)

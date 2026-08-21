import { Postcard } from "../components"
import {Container} from "../components/index.js"
import service from "../appwrite/conf"
import { useEffect, useState } from "react"

function Allposts() {

    const [posts, setPosts] = useState()
    useEffect(()=>{
          service.getPost([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
    },[posts])

  
  return (
    <div className="w-full py-8">
    <Container>
        {posts.map((post)=>(<div key={post.$id} className="p-2 w-1/4"><Postcard post={post} /></div>))}
    </Container>
      
    </div>
  )
}

export default Allposts

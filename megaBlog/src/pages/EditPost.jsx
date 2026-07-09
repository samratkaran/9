import { useEffect,  useState } from "react"
import { Container } from "../components"
import {useParams,  useNavigate } from "react-router-dom"
import service from "../appwrite/conf"
import Postform from "../components"


function EditPost() {
    const [posts, setPosts] = useState()
    const {slug}= useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])
  return (
    posts ? (
        <div className="py-8">
            <Container>
                <Postform post={posts}/>
            </Container>
        </div>
    ) : null
  )
}

export default EditPost

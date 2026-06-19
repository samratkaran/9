import { useCallback } from "react"
import {Button, Input, Select ,RTE} from '../index'
import service from "../../appwrite/conf"
import { useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

function Postform({post}) {
    const navigate = useNavigate()
    const userData = useSelector(state=> state.userData)
    const {register , handelSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues:{
            title:post?.title || "",
            slug:post?.slug || "",
            content:post?.content || "",
            status:post?.status || 'active'
        },
    })

return (
    <div>

    </div>
)
}

export default Postform

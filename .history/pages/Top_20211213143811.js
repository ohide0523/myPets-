import React,{useEffect,useContext} from 'react'
import {useRouter} from "next/router"
import { Context } from '../components/Context'

const Top = () => {
    const router = useRouter()
    const {uid} = useContext(Context)

    useEffect(()=>{
        if(!uid)
    },[uid])

    return (
        <div>
            <h1>トップページ</h1>
        </div>
    )
}

export default Top

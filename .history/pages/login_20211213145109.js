import Link from "next/link"
import {useRouter } next/
import React,{useContext} from 'react'
import {Context} from "../components/Context"

const login = () => {
const {googleLogin,logout} = useContext(Context)
const router = useRouter()

const 
    return (
        <div>
            <h1>ログインページ</h1>
            <button onClick={googleLogin}>Googleログイン</button>
            <button onClick={logout}>ログアウト</button>
           
               <div onClick={onClickTop}>トップページへ</div>
           
        </div>
    )
}

export default login

import Link from "next/link"
import React,{useContext} from 'react'
import {Context} from "../components/Context"

const login = () => {
const {googleLogin,logout} = useContext(Context)


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

import React,{useContext} from 'react'
import {Context} from "../components/Context"

const login = () => {
const {googleLogin} = useContext(Context)
    return (
        <div>
            <h1>ログインページ</h1>
            <button onClick={googleLogin}>Googleログイン</button>
            <button></button>
        </div>
    )
}

export default login

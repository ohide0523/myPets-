import React,{useContext} from 'react'
im

const login = () => {
const {googleLogin} = useContext(Context)
    return (
        <div>
            <h1>ログインページ</h1>
            <button onClick={googleLogin}>Googleログイン</button>
        </div>
    )
}

export default login

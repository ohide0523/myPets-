import React,{useEffect,useState} from 'react'

const anotherProfile = () => {
    const [anotherUser,setAnotherUser] = useState([])
    useEffect(()=>{
        getAnotherUser()
    },[])

    

    return (
        <div>
            
        </div>
    )
}

export default anotherProfile

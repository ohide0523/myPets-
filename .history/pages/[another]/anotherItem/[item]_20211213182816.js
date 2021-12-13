import React from 'react'
import {useRouter} from "next/router"

const item = () => {
    const router = useRouter()
    const {another,item} = router.query()

    useEffect(()=>{
        if(another )
    },[another,item])

    return (
        <div>
            <h1>itemページ</h1>

        </div>
    )
}

export default item

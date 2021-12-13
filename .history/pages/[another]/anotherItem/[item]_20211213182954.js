import React from 'react'
import {useRouter} from "next/router"
import { db } from '../../../components/firebase'

const item = () => {
    const router = useRouter()
    const {another,item} = router.query()

    useEffect(()=>{
        if(another && item){
            getAnotherItem()
        }
    },[another,item])

    const getAnotherItem =()=>{
        db.collection("users").doc(another).collection("items").doc(item).
    }

    return (
        <div>
            <h1>itemページ</h1>

        </div>
    )
}

export default item

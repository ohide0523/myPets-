import React,{useEffect,useState} from 'react'
import {db} from "../../../components/firebase"

const editItem = () => {

useEffect(()=>{
    getEditData()
},[])

const getEditData =()=>{
    db.collection("users").doc(ui)
}

    return (
        <div>
            <h1>item編集ページ</h1>

        </div>
    )
}

export default editItem

import React,{createContext,useState,useEffect} from 'react'

export const Context = createContext()


const ContextProvider = ({childern}) => {
    return (
        <Context.Provider>
                {c}
        </Context.Provider>
    )
}

export default ContextProvider

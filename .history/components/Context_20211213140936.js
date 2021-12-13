import React,{createContext,useState,useEffect} from 'react'

export const Context = createContext()


const ContextProvider = ({childern}) => {
    return (
        <Context.Provider>
                {children}
        </Context.Provider>
    )
}

export default ContextProvider

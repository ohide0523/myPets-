import React,{createContext,useState,useEffect} from 'react'

export const Context = createContext()


const ContextProvider = (c) => {
    return (
        <Context.Provider>
                {children}
        </Context.Provider>
    )
}

export default ContextProvider

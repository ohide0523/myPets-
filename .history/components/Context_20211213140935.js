import React,{createContext,useState,useEffect} from 'react'

export const Context = createContext()


const ContextProvider = ({childern}) => {
    return (
        <Context.Provider>
                {child}
        </Context.Provider>
    )
}

export default ContextProvider

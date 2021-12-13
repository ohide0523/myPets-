import React, { createContext, useState, useEffect } from "react";
import { auth, db, googleProvider } from "./firebase";


export const Context = createContext();

const ContextProvider = ({children}) => {

const googleLo

  return <Context.Provider>{children}</Context.Provider>;
};

export default ContextProvider;

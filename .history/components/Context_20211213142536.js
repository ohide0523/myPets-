import React, { createContext, useState, useEffect } from "react";
import {auth} from import { auth, db, googleProvider } from "./firebase";


export const Context = createContext();

const ContextProvider = ({children}) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export default ContextProvider;

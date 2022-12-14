import React,{createContext,useReducer, useState} from 'react'
import authReducer, { initialState } from '../reducers/authReducer'

export const authContext = createContext()

export default function Auth({children}) {

    const [state,dispatch] = useReducer(authReducer,initialState)

    return <authContext.Provider value={{
        user:state.user,
        logged:state.logged,
        setUser:dispatch
    }}>
        {children}
    </authContext.Provider>
}
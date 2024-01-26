import React from 'react'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'))
 
    userData && setUser(userData)
  }, [])

  
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export default UserContextProvider

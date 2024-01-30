import React from 'react'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const saveUser = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user));
    console.log('Set user successfully, user: ', user)
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'))

    userData && setUser(userData)
  }, [])


  return <UserContext.Provider value={{ user, saveUser }}>{children}</UserContext.Provider>
}

export default UserContextProvider

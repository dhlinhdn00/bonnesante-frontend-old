/* eslint-disable prettier/prettier */
import React from 'react'
import UserContextProvider from './contexts/userContext'
import ResultsContextProvider, { ResultsContext } from './contexts/resultsContext'
import { firebaseConfig } from './services/firebase/config'


const App = ({ children }) => {
  firebaseConfig();
  return (
    <UserContextProvider>
      <ResultsContextProvider>
        <div>{children}</div>
      </ResultsContextProvider>
    </UserContextProvider>
  )
}
export default App

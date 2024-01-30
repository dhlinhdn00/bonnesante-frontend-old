/* eslint-disable prettier/prettier */
import React from 'react'

import UserContextProvider from './contexts/userContext'
import ResultsContextProvider, { ResultsContext } from './contexts/resultsContext'

const App = ({ children }) => {
  return (
    <UserContextProvider>
      <ResultsContextProvider>
        <div>{children}</div>
      </ResultsContextProvider>
    </UserContextProvider>
  )
}
export default App

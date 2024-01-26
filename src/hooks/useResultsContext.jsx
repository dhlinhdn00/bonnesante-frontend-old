import { useContext } from 'react'
import { ResultsContext } from '../contexts/resultsContext'

const useResultsContext = () => {
  const results = useContext(ResultsContext)

  return results
}

export default useResultsContext

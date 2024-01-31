import { useContext } from 'react'
import { ResultsContext } from '../contexts/resultsContext'

const useResultsContext = () => {
  const {result, setResult} = useContext(ResultsContext)

  return {result, setResult}
}

export default useResultsContext

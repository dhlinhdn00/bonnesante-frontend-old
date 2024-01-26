import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'

const useUserContext = () => {
  const user = useContext(UserContext)

  return user
}

export default useUserContext

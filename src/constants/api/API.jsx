import axios from 'axios'
import { PATH_URL } from '../values'

export default axios.create({
  baseURL: PATH_URL,
})

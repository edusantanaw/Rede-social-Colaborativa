import axios from 'axios'
import { baseUrl } from '../../constants/baseUrl'

export const Api = axios.create({
    baseURL: `${baseUrl}/api`
})
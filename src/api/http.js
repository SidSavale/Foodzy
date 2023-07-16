import axios from "axios";
import {API_BASE_URL,API_REQUEST_TIMEOUT} from './constant.js'

export const http = axios.create({
    baseURL: API_BASE_URL,
    timeout: API_REQUEST_TIMEOUT,
})



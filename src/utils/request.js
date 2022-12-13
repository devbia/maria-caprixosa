
import axios from "axios"

const request = axios.create({
  baseURL: process.env.LOCAL == "PROD" ? process.env.BASE_URL_PROD : process.env.BASE_URL
});


export default request; 
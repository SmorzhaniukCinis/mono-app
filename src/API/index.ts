import axios from "axios";


export const instance = axios.create({
  baseURL: 'https://api.monobank.ua/',
  headers: {
    'X-Token': localStorage.getItem('token')
  }

})
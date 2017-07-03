//* App API *//
import axios from 'axios'

export const baseURL = 'https://api.instagram.com/v1'

export const HTTP = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

//* App API *//
import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
  headers: {
    Authorization: 'Bearer {token}',
    'Content-Type': 'application/json'
  }
})

// END Points
// const API_ROOT = {
//   root: 'https://financeapi.zflow.com.br'
// }

// Exemple after exported

// import { HTTP } from '../api';
//
// export default {
//   data: () => ({
//     carros: [],
//     errors: []
//   }),
//
//   listarCarros() {
//     HTTP.get('carros')
//     .then(response => {
//       this.carros = response.data
//     })
//     .catch(e => {
//       this.errors.push(e)
//     })
//   },
//
//   addCarros() {
//     HTTP.post('/add/carros', {})
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   }
// }

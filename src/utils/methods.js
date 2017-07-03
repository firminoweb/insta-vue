//* App Methods *//
import { baseURL } from '../api'
import route from '../router'
var jsonp = require('jsonp')
// import qs from 'qs'

// @Utils Methods
export function preventer () {
  return false
}

export function instaLogin () {
  let clientid = 'dc0f03d7620e49f2920315a8efd26b90'
  let redirecturi = 'http://localhost:8080'
  let responsetype = 'token'
  let scope = 'public_content'

  window.location = 'https://www.instagram.com/oauth/authorize/?client_id=' + clientid + '&redirect_uri=' + redirecturi + '&response_type=' + responsetype + '&scope=' + scope
}

export function verifyUser (access) {
  // HTTP.get('/users/self/?access_token=' + access + '&callback=?')
  // .then(function (response) {
  //   console.log('response: ', response)
  // })
  // .catch(function (error) {
  //   console.log('Erro: ', error)
  // })

  jsonp(baseURL + '/users/self/?access_token=' + access + '&callback=', null, function (err, res) {
    if (err) {
      console.error(err.message)
    } else {
      if (res.data) {
        console.log(res.data)
      } else {
        console.log('Não está logado!')
        route.push('login')
      }
    }
  })
}

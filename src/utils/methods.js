//* App Methods *//
import { baseURL } from '../api'
import route from '../router'
import UserStore from '../services/user'
var jsonp = require('jsonp')
// import qs from 'qs'

// @Utils Methods
export function preventer () {
  return false
}

export function instaLogin () {
  let clientid = 'dc0f03d7620e49f2920315a8efd26b90'
  let redirecturi = 'http://localhost:8080/auth'
  let responsetype = 'token'
  let scope = 'public_content'

  window.location = 'https://www.instagram.com/oauth/authorize/?client_id=' + clientid + '&redirect_uri=' + redirecturi + '&response_type=' + responsetype + '&scope=' + scope
}

export function logout () {
  UserStore.removeItem('token')
  route.push('login')
}

export function verifyUser (access, context) {
  jsonp(baseURL + '/users/self/?access_token=' + access + '&callback=', null, (err, res) => {
    if (err) {
      console.error(err.message)
    } else {
      console.log(access)
      if (res.data) {
        context.user.userId = res.data.id
        context.user.userAvatar = res.data.profile_picture
        context.user.userFullName = res.data.full_name
        context.user.userBio = res.data.bio
        context.user.userFollowers = res.data.counts.followed_by
        context.user.userFollows = res.data.counts.follows
        context.user.userPosts = res.data.counts.media
        console.log(res.data)
      } else {
        console.log('Não está logado!')
      }
    }
  })
}

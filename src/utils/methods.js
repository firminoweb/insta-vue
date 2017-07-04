//* App Methods *//
import { baseURL } from '../api'
import route from '../router'
import UserStore from '../services/user'
var jsonp = require('jsonp')

// @Utils Methods
export function preventer () {
  return false
}

export function parseInstaDate (date) {
  let fdate = new Date(parseInt(date) * 1000)

  let month = ('0' + (fdate.getMonth() + 1)).slice(-2)
  let fullYear = fdate.getFullYear()
  let day = ('0' + fdate.getDay()).slice(-2)

  return day + '/' + month + '/' + fullYear
}

export function instaLogin () {
  window.location = 'https://www.instagram.com/oauth/authorize/?client_id=' + UserStore.userData.clientId + '&redirect_uri=' + UserStore.userData.redirectUri + '&response_type=' + UserStore.userData.responseType + '&scope=' + UserStore.userData.scope
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
      context.user.userId = res.data.id
      context.user.userAvatar = res.data.profile_picture
      context.user.userFullName = res.data.full_name
      context.user.userBio = res.data.bio
      context.user.userFollowers = res.data.counts.followed_by
      context.user.userFollows = res.data.counts.follows
      context.user.userPosts = res.data.counts.media
    }
  })
}

export function myLastPosts (access, context) {
  jsonp(baseURL + '/users/self/media/recent/?count=5&access_token=' + access + '&callback=', null, (err, res) => {
    if (err) {
      console.error(err.message)
    } else {
      context.myPosts = res.data
      console.log(res.data)
    }
  })
  // https://api.instagram.com/v1/users/self/media/recent/?count=5&access_token=20644171.dc0f03d.a986f2a34b964a709fd0105cf711bff6
}

<template>
  <div>
    <nav class="nav has-shadow" id="top">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item" href="/">
            <img :src="appLogo" alt="Description">
          </a>
        </div>
        <div class="nav-right">
          <span class="nav-item">
          </span>
          <span class="nav-item">
            <a class="button is-danger" @click="logout">
              Log Out
            </a>
          </span>
        </div>
      </div>
    </nav>

    <div class="container profile">

      <div class="section profile-heading mb-1">
        <div class="columns">
          <div class="column is-2">
            <div class="image is-128x128 avatar">
              <img :src="user.userAvatar">
            </div>
          </div>
          <div class="column is-4 name">
            <p>
              <span class="title is-bold">{{user.userFullName}}</span>
            </p>
            <p class="tagline">{{user.userBio}}</p>
          </div>
          <div class="column is-2 followers has-text-centered">
            <p class="stat-val">{{user.userFollowers}}</p>
            <p class="stat-key">seguidores</p>
          </div>
          <div class="column is-2 following has-text-centered">
            <p class="stat-val">{{user.userFollows}}</p>
            <p class="stat-key">seguindo</p>
          </div>
          <div class="column is-2 likes has-text-centered">
            <p class="stat-val">{{user.userPosts}}</p>
            <p class="stat-key">posts</p>
          </div>
        </div>
      </div>

      <div class="box">
      aa
      </div>

    </div>
  </div>
</template>

<script>
  // Import Methods
  import {
    preventer,
    verifyUser,
    logout
  } from '../utils/methods'

  import UserStore from '../services/user'

  export default {
    name: 'home',
    data () {
      return {
        msg: 'Home',
        appLogo: 'static/img/instagram-logo-black.png',
        accessToken: null,
        user: {
          userId: null,
          userAvatar: null,
          userFullName: null,
          userBio: null,
          userFollowers: null,
          userFollows: null,
          userPosts: null
        }
      }
    },
    beforeCreate () {
      // Get User Profile Data
      verifyUser(UserStore.getItem('token'), this)
      // Get Geolocation
      if (!UserStore.getItem('latitude') || !UserStore.getItem('longitude')) {
        UserStore.getGetLocation(UserStore)
      }
    },
    mounted () {
      // if (UserStore.get('app')) {
      //   console.log('ssss')
      //   UserStore.remove('app')
      // }
    },
    methods: {
      preventer,
      verifyUser,
      logout
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>

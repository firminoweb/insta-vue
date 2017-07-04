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

    <div class="container profile mb-2">

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

      <hr class="mb-2">

      <div class="columns">
        <div class="column">

          <div class="box">
            <h2 class="title is-bold">Seus últimos posts</h2>

            <div class="card mb-1" v-for="post in myPosts">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="post.images.standard_resolution.url" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p>{{post.caption.text}}</p>
                  <p class="is-light">
                    <small class="is-primary">
                      <b-icon icon="location_city" size="is-small" type="is-primary"></b-icon> {{post.location.name}}</small> | 
                    <small>
                      <b-icon icon="date_range" size="is-small" type="is-primary"></b-icon> {{ parseInstaDate(post.created_time) }}
                    </small>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div class="column">
          <h2>Posts próximos a você</h2>
        </div>
      </div>

    </div>

    <footer class="footer hero is-primary">
      <div class="container">
        <div class="content has-text-centered">
          <p class="has-text-white">© 2017 Instagram
          </p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  // Import Methods
  import {
    preventer,
    verifyUser,
    logout,
    myLastPosts,
    parseInstaDate
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
        },
        myPosts: null
      }
    },
    beforeCreate () {
      // Get User Profile Data
      verifyUser(UserStore.getItem('token'), this)
      // Get Geolocation
      if (!UserStore.getItem('latitude') || !UserStore.getItem('longitude')) {
        UserStore.getGetLocation(UserStore)
      }
      console.log(UserStore.getItem('token'))
      console.log(UserStore.getItem('latitude'))
      console.log(UserStore.getItem('longitude'))
    },
    mounted () {
      // if (UserStore.get('app')) {
      //   console.log('ssss')
      //   UserStore.remove('app')
      // }
      // console.log(this.parseInstaDate(1482359256))
      this.myLastPosts(UserStore.getItem('token'), this)
    },
    methods: {
      preventer,
      verifyUser,
      logout,
      myLastPosts,
      parseInstaDate
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>

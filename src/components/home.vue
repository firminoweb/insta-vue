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
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" v-model="tagInput" placeholder="Buscar Tag">
              </p>
              <p class="control">
                <a class="button is-primary" :href="/tag/ + tagInput">
                  <b-icon
                      icon="search">
                  </b-icon>
                </a>
              </p>
            </div>
          </span>
          <span class="nav-item">
            <a class="button is-danger" id="logOut" @click="logout">Log Out</a>
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
            <h2 class="is-spaced title" id="lastpo">Seus últimos posts</h2>

            <hr>

            <b-field>
                <b-select v-model="qtsMyPosts" placeholder="Quantidade" icon="dashboard">
                  <option value="15" selected>5 Posts</option>
                  <option value="10">10 Posts</option>
                  <option value="5">15 Posts</option>
                  <option value="0">20 Posts</option>
                </b-select>
            </b-field>

            <div class="card mb-1" v-for="(post, index) in myPosts" v-if="index < (myPosts.length - qtsMyPosts)">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="post.images.standard_resolution.url" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p v-if="post.caption">{{post.caption.text}}</p>
                  <p class="is-light">
                    <small class="is-primary" v-if="post.location">
                      <b-icon icon="location_city" size="is-small" type="is-primary"></b-icon> {{post.location.name}} | </small> 
                    <small>
                      <b-icon icon="date_range" size="is-small" type="is-primary"></b-icon> {{ parseInstaDate(post.created_time) }} 
                    </small>
                    <small v-if="post.likes">
                      | <b-icon icon="favorite" size="is-small" type="is-primary"></b-icon> {{post.likes.count}}
                    </small>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div class="column">
          <div class="box">
            <h2 class="is-spaced title">
              Posts próximos a você
            </h2>

            <hr>

            <b-field>
                <b-select v-model="qtsAreaPosts" placeholder="Quantidade" icon="explore" @change.native="updateAreaPosts(qtsAreaPosts)">
                  <option value="1000" selected>1km</option>
                  <option value="2000">2km</option>
                  <option value="3000">3km</option>
                  <option value="4000">4km</option>
                  <option value="5000">5km</option>
                </b-select>
            </b-field>

            <div class="card mb-1" v-for="(post, index) in arPosts">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="post.images.standard_resolution.url" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img :src="post.user.profile_picture" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{post.user.full_name}}</p>
                    <p class="subtitle is-6">{{post.user.full_name}}</p>
                  </div>
                </div>
                <div class="content">
                  <p>{{post.caption.text}}</p>
                  <p class="is-light">
                    <small class="is-primary">
                      <b-icon icon="location_city" size="is-small" type="is-primary"></b-icon> {{post.location.name}} | </small>
                    <small>
                      <b-icon icon="date_range" size="is-small" type="is-primary"></b-icon> {{ parseInstaDate(post.created_time) }}
                    </small>
                    <small v-if="post.likes">
                      | <b-icon icon="favorite" size="is-small" type="is-primary"></b-icon> {{post.likes.count}}
                    </small>
                  </p>
                </div>
              </div>
            </div>

          </div>          
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
    parseInstaDate,
    areaPosts,
    updateAreaPosts
  } from '../utils/methods'

  import UserStore from '../services/user'

  export default {
    name: 'home',
    data () {
      return {
        msg: 'Home',
        appLogo: 'static/img/instagram-logo-black.png',
        accessToken: null,
        qtsMyPosts: 15,
        qtsAreaPosts: 1000,
        user: {
          userId: null,
          userAvatar: null,
          userFullName: null,
          userBio: null,
          userFollowers: null,
          userFollows: null,
          userPosts: null
        },
        myPosts: null,
        arPosts: null,
        seTags: null,
        tagInput: ''
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
      this.myLastPosts(UserStore.getItem('token'), this)
      this.areaPosts(
        UserStore.getItem('token'),
        UserStore.getItem('latitude'),
        UserStore.getItem('longitude'),
        1000,
        this
      )
    },
    methods: {
      preventer,
      verifyUser,
      logout,
      myLastPosts,
      parseInstaDate,
      areaPosts,
      updateAreaPosts
    }
  }
</script>

<style lang="scss"></style>

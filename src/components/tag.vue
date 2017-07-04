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
            <a class="button is-danger" @click="logout">
              Log Out
            </a>
          </span>
        </div>
      </div>
    </nav>

    <div class="container profile mb-2">

      <div class="box mb-1">
        <h1 class="title">#{{ $route.params.tag }}</h1>
        <h2 class="subtile">({{ seTags.length }}) tags relacionas encontradas</h2>
      </div>

      <hr class="mb-2">

      <div class="columns">
        <div class="column">
          <div class="box">
            <span class="tag is-medium is-info mb-1 mr-1" v-for="tag in seTags">
              {{tag.name}}
              <button class="is-small">{{tag.media_count}}</button>
            </span>
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
    logout,
    searchTags
  } from '../utils/methods'

  import UserStore from '../services/user'

  export default {
    name: 'tag',
    data () {
      return {
        msg: 'Tag',
        appLogo: '../static/img/instagram-logo-black.png',
        seTags: null,
        tagInput: ''
      }
    },
    beforeCreate () {},
    mounted () {
      this.searchTags(UserStore.getItem('token'), this.$route.params.tag, this)
    },
    methods: {
      preventer,
      logout,
      searchTags
    }
  }
</script>

<style lang="scss"></style>

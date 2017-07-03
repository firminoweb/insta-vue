<template>
  <section class="hero is-info is-fullheight">

<!--     <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-center">
            <a class="nav-item">
              <img src="static/img/instagram-logo-white.png" alt="Logo">
            </a>
          </div>
        </div>
      </header>
    </div> -->

    <div class="hero-body">
      <div class="container">

        <div class="columns">
          <div class="column is-mobile is-half-tablet is-half-desktop is-offset-one-quarter">

            <div class="box">

            <p>Homee</p>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="hero-foot pa-1">
      <div class="container">
        <div class="content has-text-centered">
          <p class="has-text-white">© 2017 Instagram</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // Import Methods
  import {
    preventer,
    verifyUser
  } from '../utils/methods'

  export default {
    name: 'home',
    data () {
      return {
        msg: 'Home'
      }
    },
    beforeCreate () {
      let hash = window.location.hash
      let accessToken = hash.split('=')[1]
      verifyUser(accessToken)
      // if () {

      // }
    },
    methods: {
      preventer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>

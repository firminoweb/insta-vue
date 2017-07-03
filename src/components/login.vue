<template>
  <section class="hero is-primary is-fullheight intro-bg">

    <div class="hero-body">
      <div class="container">

        <div class="columns">
          <div class="column is-mobile is-half-tablet is-half-desktop is-offset-one-quarter">
            
            <div class="has-text-centered mb-1">
              <img :src="appLogo" alt="Logo" width="120">
            </div>

            <div class="box">

              <a class="button is-primary is-fullwidth is-medium mb-1" @click="instaLogin">
                <b-icon icon="person" size="is-medium"></b-icon>
                <span>Log in with {{appName}}</span>
              </a>

              <div class="columns">
                <div class="column has-text-centered">
                  <small class="has-text-primary">{{signUpTxt}} <a href="https://www.instagram.com/accounts/signup/" target="_blank" title="Sign Up" class="is-bold">{{signUpBtn}}</a></small>
                </div>

                <div class="column has-text-centered">
                  <small class="has-text-primary">{{resetTxt}} <a href="https://www.instagram.com/accounts/password/reset/" target="_blank" title="Reset Password!" class="is-bold">{{resetBtn}}</a></small>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="hero-foot pa-1">
      <div class="container">
        <div class="content has-text-centered">
          <p class="has-text-white">© 2017 {{appName}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // Import Methods
  import {
    preventer,
    instaLogin
  } from '../utils/methods'

  export default {
    name: 'login',
    data () {
      return {
        appLogo: 'static/img/instagram-logo-white.png',
        appName: 'Instagram',
        signUpBtn: 'Sign up',
        signUpTxt: 'Dont have an account?',
        resetBtn: 'Reset',
        resetTxt: 'Forgot Password?'
      }
    },
    methods: {
      preventer,
      instaLogin
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .intro-bg {
    position: relative;
    overflow: hidden;
    z-index: 0;
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: .4;
      background-image: url('~/static/img/insta-login-bg.jpeg');
      background-repeat: no-repeat;
      background-position: 50% 0;
      -ms-background-size: cover;
      -o-background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      background-size: cover;
    }
  }
</style>

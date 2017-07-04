<template>
  <router-view></router-view>
</template>

<script>
  // import UserStore from './services/user'

  export default {
    name: 'app',
    mounted () {}
  }
</script>

<style lang="scss">
  //*** Main Styles (Vendors + App Styles) ***//
  @import 'main';

  //*** Another App Style ***//
  #app {}
</style>

<template>
  <div id="app" class="wrap">
    <desk-header></desk-header>
    <notice></notice>
    <search></search>
    <background></background>
    <menu-wrap></menu-wrap>
    <desk-wrap></desk-wrap>
    <router-view/>

  </div>
</template>

<script>
  import deskHeader from './components/header'
  import notice from './components/notice/notice'
  import search from './components/search'
  import background from './components/background'
  import menuWrap from './components/menuIcon'
  import deskWrap from './components/deskIcon'

  export default {
    name: 'app',
    components: {
      deskHeader,
      notice,
      search,
      background,
      menuWrap,
      deskWrap
    }
  }
</script>

<style>
  #app {

  }
</style>

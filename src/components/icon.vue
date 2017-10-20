<template>
  <div class="desktop-icon">
    <a href="#">
      <img :src="iconData.url"/>
      <span class="desktop-icon-name" v-if="iconData.desc!=''">{{iconData.desc}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    props: ['iconData']
  }
</script>

<style>
  .menu-icon-wrap .desktop-icon {
    margin-top: 26px;
  }

  .desktop-icon {
    text-align: center;
    width: 92px;
  }

  .desktop-icon img {
    border-radius: 8px;
    box-shadow: 0.5px 0.866px 0px 0px rgba(0, 0, 0, 0.28);
    width: 60px;
    height: 60px;
  }

  .desktop-icon-name {
    display: block;
    font-size: 14px;
    width: 92px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 auto;
    text-align: center;
  }

  .menu-icon-wrap .desktop-icon-name {
    margin-top: 10px;
  }
</style>

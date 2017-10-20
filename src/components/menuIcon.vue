<template>
  <div class="menu-wrap">
    <div class="menu-bar">
      <div class="menu-icon-wrap over" id="menuSortable">
        <menu-child v-for="(item,index) in iconArr" :iconData="item" :key="index"></menu-child>
      </div>
      <div class="menu-btn" style="top: 622px;">
        <a href="#" class="user"><img src="../../static/image/user.png"/></a>
        <a href="#" class="key"><img src="../../static/image/key.png" alt=""/></a>
      </div>
      <div class="menu-btn" style="top: 672px;">
        <a href="#" class="setting"><img src="../../static/image/setting.png"/></a>
        <a href="#" class="close"><img src="../../static/image/close.png"/></a>
      </div>
    </div>
  </div>
</template>

<script>
  import menuChild from './icon'

  export default {
    mounted: function () {
      /**
       * 左侧图标拖拽设置
       */
      $('#menuSortable').sortable({
        revert: true,
        scroll: true,
        tolerance: 'pointer',
        helper: 'clone'
      })
    },
    components: {
      menuChild
    },
    computed: {
      iconArr: function () {
        return this.$store.state.menuIcon.menuArr
      }
    }
  }
</script>

<style>
  .menu-wrap {
    position: absolute;
    height: 718px;
    width: 94px;
    bottom: 49px;
    left: -1px;
  }

  .menu-wrap a {
    display: inline-block;
  }

  .menu-bar {
    border-style: solid;
    border-width: 1px;
    border-color: rgb(69, 69, 69);
    border-radius: 2px;
    background-image: linear-gradient(0deg, rgba(68, 68, 68, 0.38039) 0%, rgba(68, 68, 68, 0.39) 3%, rgba(68, 68, 68, 0.44) 19%, rgba(68, 68, 68, 0.45882) 24%, rgba(68, 68, 68, 0.42) 50%, rgba(68, 68, 68, 0.4) 63%, rgba(68, 68, 68, 0.4) 67%, rgba(68, 68, 68, 0.38) 75%, rgba(68, 68, 68, 0.34902) 100%);
    box-shadow: 2px 0px 3px 0px rgba(0, 0, 0, 0.23);
    width: 94px;
    height: 721px;
    overflow: hidden;
    position: relative;
  }

  .menu-bar > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .menu-icon-wrap {
    height: 622px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;
    transition: all .3s;
    margin: 0;
    position: absolute;
    left: 0;
  }

  .menu-btn {
    height: 50px;
  }

  .menu-btn > a {
    width: 44px;;
    height: 100%;
    text-align: center;
  }

  .menu-btn img {
    margin-top: 13px;
  }

  .menu-btn:before {
    content: "";
    position: absolute;
    width: 98%;
    background-color: rgba(2, 11, 21, 0.58);
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.19);
    height: 1px;
  }

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

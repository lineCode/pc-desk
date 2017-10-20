<template>
  <div class="bg" ref="bg"
       :style="{'background':'url('+backgroundPic+') no-repeat center center',backgroundSize: 'cover'}">
    <div class="bg-btn-wrap">
      <a class="prev-bar menu-btm-bar " href="#" @click.prevent="toggleBg"></a>
      <a class="next-bar menu-btm-bar " href="#" @click.prevent="toggleBg"></a>
    </div>
  </div>
</template>

<script>
  import backgroundPic from '../../static/image/bg1.png'

  export default {
    data: function () {
      return {
        backgroundPic: backgroundPic
      }
    },
    computed: {
      bgArr: function () {
        return this.$store.state.Background.bgImgArr
      },
      showBg: function () {
        return this.$store.state.Background.showBgIdx
      }
    },
    methods: {
      /**
       * 切换背景
       * @param e 鼠标
       */
      toggleBg: function (e) {
        var idx = [].indexOf.call(e.target.parentNode.querySelectorAll(e.target.tagName), e.target)
        var num = idx === 0 ? -1 : idx === 1 ? 1 : 0
        this.$store.commit('refreshIdx', num)
        this.$refs.bg.style.background = 'url(' + this.bgArr[this.showBg] + ') no-repeat center center'
        this.$refs.bg.style.backgroundSize = 'cover'
      }
    }
  }
</script>

<style>
  .bg {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .bg-btn-wrap {
    position: absolute;
    bottom: 0;
  }

  .menu-btm-bar {
    width: 17px;
    height: 16px;
    margin: 15px 13px;
    display: inline-block;
  }

  .menu-btm-bar.unuse {
    opacity: 0.7;
  }

  .prev-bar {
    background: url('../../static/image/prev-btm-bar.png') no-repeat center center;
  }

  .next-bar {
    background: url('../../static/image/next-btm-bar.png') no-repeat center center;
  }
</style>

<template>
  <div class="item" :class="{show:showItem}">
    <div class="item-divider">
							<span class="divider-icon">
								<img src="../../../static/image/haibao.png"/>
							</span>
      <span class="divider-title">通知海报</span>
    </div>
    <ul class="item-list">
      <li class="item-detile" :style="{'background':'url('+underlinpic+') no-repeat bottom center'}">
        <a href="#">
          <i></i>
          <span>有责敢担当 出力又出彩 </span>
        </a>
      </li>
      <li class="item-detile" :style="{'background':'url('+underlinpic+') no-repeat bottom center'}">
        <a href="#">
          <i></i>
          <span>有责敢担当 出力又出彩 </span>
        </a>
      </li>
      <li class="item-detile" :style="{'background':'url('+underlinpic+') no-repeat bottom center'}">
        <a href="#">
          <span>张浦建立全省首家区镇综治联动...</span>
        </a>
      </li>
      <li class="item-detile" :style="{'background':'url('+underlinpic+') no-repeat bottom center'}">
        <a href="#">
          <span>张浦建立全省首家区镇综治联的... </span>
        </a>
      </li>
      <li class="item-detile">
        <a href="#">
          <span>张浦建立全省首家区镇综治联的... </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['showItem'],
    computed: {
      underlinpic () {
        return this.$store.state.QbdsjNotice.underlinpic
      }
    }
  }
</script>

<style>

</style>

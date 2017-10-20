<template>
  <div class="item" :class="{show:showItem}">
    <div class="item-divider">
							<span class="divider-icon">
								<img src="../../../static/image/rili.png"/>
							</span>
      <span class="divider-title">日历</span>
    </div>
    <ul class="item-list">
      <li class="item-detile" :style="{'background':'url('+underlinpic+') no-repeat bottom center'}">
        <a href="#"><span class="item-time">08:00</span><span>某某会议</span></a>
      </li>
      <li class="item-detile" :style="{'background':'url('+underlinpic+') no-repeat bottom center'}">
        <a href="#"><span class="item-time">09:00</span><span>领导领导莅临</span></a>
      </li>
      <li class="item-detile">
        <a href="#"><span class="item-time">09:50</span><span>开发区小学开学</span></a>
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

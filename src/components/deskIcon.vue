<template>
  <div>
    <div class="desk-icon-wrap" id="sortable">
      <icon v-for="(item,index) in iconArr" :iconData="item" :key="index"></icon>
    </div>
  </div>
</template>

<script>
  import icon from './icon'

  export default {
    mounted: function () {
      /**
       * 桌面图标拖拽设置
       */
      $('#sortable').sortable({
        revert: true,
        scroll: true,
        tolerance: 'pointer',
        /**
         * 拖拽助手——用于拖拽过程中显示效果
         * @param e event
         * @returns {Element|HTMLElementTagNameMap[string]} 返回DOM节点
         */
        helper: function (e) {
          var nodeName = e.target.nodeName
          var target = $(e.target)
          var element = nodeName === 'LI' ? target : nodeName === 'A' ? target.parent() : nodeName === 'SPAN' || nodeName === 'IMG' ? target.parent().parent() : null
          var div = document.createElement('div')
          div.style.width = '100px'
          div.style.height = '100px'
          div.style.border = '1px solid #ddd'
          return div
        },
        delay: 10,
        distance: 1,
        revertDuration: 10,
        items: '.desktop-icon:not(.desktop-icon:last-child)'
      })
    },
    components: {
      icon
    },
    computed: {
      iconArr: function () {
        return this.$store.state.deskIcon.deskArr
      }
    }
  }
</script>

<style>
  .desk-icon-wrap {
    position: absolute;
    right: 0;
    top: 10%;
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start
  }

  .desk-icon-wrap .desktop-icon {
    height: 104px;
    margin-top: 39px;
    margin-right: 10px;
    transition: all .3s;
  }

  .desk-icon-wrap .desktop-icon-name {
    margin-top: 15px;
    background-color: rgba(0, 0, 0, 0.38);
    width: 83px;
    height: 26px;
    line-height: 26px;
    border-radius: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    white-space: inherit;
  }
</style>

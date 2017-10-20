import Vue from 'vue'
import Vuex from 'vuex'
import underlinpic from '../../static/image/underline.png'

Vue.use(Vuex)

const QbdsjNotice = {
  /**
   * showNotice {Bool} 是否显示右侧列表
   * showItem {Bool} 显示右侧列表子项目(只用于淡入动画效果)
   */
  state: {
    showNotice: false,
    showItem: false,
    underlinpic: underlinpic
  },
  mutations: {
    /**
     * 切换右侧列表(打开/关闭)
     * @param state
     */
    toggleNotice (state) {
      state.showNotice = !state.showNotice
    },
    /**
     * 列表子项目是否显示
     * @param state
     */
    changeShowItem (state) {
      state.showItem = true
    }
  }
}

const QbdsjSearch = {
  // 否打开搜索框
  state: {
    showSearch: false
  },
  mutations: {
    /**
     * 打开或关闭搜索框
     * @param state
     */
    toggleSearch: function (state) {
      state.showSearch = !state.showSearch
    }
  }
}

const Background = {
  /**
   * bgImgArr {Array} 背景图片url数组
   * showBgIdx {Number} 当前显示图片下标
   */
  state: {
    bgImgArr: [
      './static/image/bg1.png',
      './static/image/bg2.png',
      './static/image/bg3.png'
    ],
    showBgIdx: 0
  },
  mutations: {
    /**
     * 更新背景图片下标
     * @param state
     * @param num {Number} 下一张或上一张
     */
    refreshIdx: function (state, num) {
      state.showBgIdx += num
      state.showBgIdx = state.showBgIdx >= state.bgImgArr.length ? 0 : state.showBgIdx < 0 ? state.bgImgArr.length - 1 : state.showBgIdx
    }
  }
}

const menuIcon = {
  state: {
    menuArr: [
      {
        'url': './static/image/weifaxiansuo.gif',
        'desc': '违法线索'
      },
      {
        'url': './static/image/shehuimiancaiji.gif',
        'desc': '社会面采集'
      },
      {
        'url': './static/image/chuanbinganxitong.gif',
        'desc': '串并案系统'
      },
      {
        'url': './static/image/bilupingguxitong.gif',
        'desc': '笔录评估系统'
      },
      {
        'url': './static/image/quanjingtongjiansuo.gif',
        'desc': '全警通检索'
      }
    ]
  }
}

const deskIcon = {
  state: {
    deskArr: [
      {
        'url': './static/image/daoxundaohang.gif',
        'desc': '导巡导防'
      },
      {
        'url': './static/image/gaoweirenyuanfen.gif',
        'desc': '高危人员分'
      },
      {
        'url': './static/image/dianzishujucaiji.jpg',
        'desc': '电子数据采集'
      },
      {
        'url': './static/image/dianzishujucaiji.jpg',
        'desc': '电子数据采集'
      },
      {
        'url': './static/image/dianzishujucaiji.jpg',
        'desc': '电子数据采集'
      },
      {
        'url': './static/image/add-icon.gif',
        'desc': ''
      }
    ]
  }
}

const store = new Vuex.Store({
  modules: {
    QbdsjNotice,
    QbdsjSearch,
    Background,
    menuIcon,
    deskIcon
  }
})
export default store

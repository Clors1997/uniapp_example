import Vue from 'vue'
import App from './App'
import helper from './common/helper/storage.js'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$getStorage = helper.getStorage
Vue.prototype.$setStorage = helper.setStorage
Vue.prototype.$removeStorage = helper.removeStorage
Vue.prototype.$clearStorage = helper.clearStorage

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

// i18n部分的配置
// 引入语言包，注意路径
import Chinese from '@/common/locales/zh.js';
import English from '@/common/locales/en.js';

// VueI18n
import VueI18n from '@/common/vue-i18n.min.js';

// VueI18n
Vue.use(VueI18n);

const i18n = new VueI18n({
  // 默认语言
  locale: 'zh',
  // 引入语言文件
  messages: {
    'zh': Chinese,
    'en': English,
  }
});

Vue.prototype._i18n = i18n;

const app = new Vue({
  i18n,
  ...App
})
app.$mount()

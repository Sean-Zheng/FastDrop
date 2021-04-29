import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from "element-ui";

Vue.config.productionTip = false;

Vue.use(Button);

//注册全局的ftp连接对象
Vue.prototype.$ftp = new window.FtpClient();

// //绑定插件退出事件，关闭ftp连接
// window.utools.onPluginOut(() => {
//   window.utools.showNotification("退出");
//   this.$ftp.end();
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

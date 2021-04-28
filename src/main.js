import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from "element-ui";

Vue.config.productionTip = false;

Vue.use(Button);

//注册全局的ftp连接对象
Vue.prototype.$ftp = new window.FtpClient();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

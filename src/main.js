import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/font-awesome/css/font-awesome.css";
import jquery from 'jquery';
import "animate.css";
window.$ = jquery;
import BaseText from './components/BaseText.vue'

import {library} from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCirclePlus , faPencil , faTrashCan } from '@fortawesome/free-solid-svg-icons'
library.add(faCirclePlus , faPencil , faTrashCan)
Vue.component("BaseText",BaseText)
Vue.component("fa-icon" , FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

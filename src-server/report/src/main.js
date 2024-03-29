import Vue from 'vue';
import VueImageCompare from 'vue-image-compare';
import VueLazyload from 'vue-lazyload';
import VueThinModal from 'vue-thin-modal';
import workerClient from './worker-client';

import App from './App.vue';

Vue.use(VueImageCompare);
Vue.use(VueThinModal);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'https://github.com/reg-viz/reg-cli/blob/master/docs/image.png?raw=true',
  error: 'https://github.com/reg-viz/reg-cli/blob/master/docs/image.png?raw=true',
  filter: {
    filter(props) {},
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});

const ximgdiffConfig = window['__reg__'].ximgdiffConfig || { enabled: false };
workerClient.start(ximgdiffConfig);

import { createApp } from "vue";
import App from "./App.vue";
import router from './router.js';
import {VueReCaptcha} from 'vue-recaptcha-v3';

createApp(App)
    .use(VueReCaptcha, {
        siteKey: '6LfaOHgmAAAAAMvrxttZCxNE0208YZ-FQGzVYl5C',
        loaderOptions: {
          useRecaptchaNet: true
        }
      })
    .use(router)
    .mount("#app")

import 'bootstrap/dist/js/bootstrap.js';
import 'mdb-vue-ui-kit/js/mdb.es.min.js';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
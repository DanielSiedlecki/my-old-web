import { createApp } from "vue";
import App from "./App.vue";
import router from './router.js';







createApp(App)
    
    .use(router)
    .mount("#app")

import 'bootstrap/dist/js/bootstrap.js';
import 'mdb-vue-ui-kit/js/mdb.es.min.js';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
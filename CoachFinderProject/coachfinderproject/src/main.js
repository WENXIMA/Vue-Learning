import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/router';
import store from './store/index.js';
import BaseSpinner from './UI/BaseSpinner.vue';
import BaseDialog from './UI/BaseDialog.vue';


const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-spinner',BaseSpinner);
app.component('base-dialog',BaseDialog);

app.mount('#app');

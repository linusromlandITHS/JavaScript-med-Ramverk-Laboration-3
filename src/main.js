//External Dependencies import:
import { createApp } from 'vue';





//Internal Dependencies import:
import App from './App.vue';
import router from './router';
import store from './store';

//Creats the Vue app
const app = createApp(App);

//Registers vue-router
app.use(router);

//Registers vuex
app.use(store);






//Mounts app to div with id app
app.mount('#app');

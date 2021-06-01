import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router.js';
import '@css/style.css'

// componenti




const app = createApp(App)
import globals from './globals.js';
import components from './components.js';


app.use(router)
app.use(globals);
app.use(components);


// fine
app.mount('#app');


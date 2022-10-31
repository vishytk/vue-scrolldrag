import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import './index.css';

import VueDragscroll from 'vue-dragscroll';

// createApp(App).mount('#app');
const app = createApp(App);

app.use(VueDragscroll);
app.mount('#app');

import { createApp } from "vue";
import { createPinia } from "pinia";

import vuetifyPlugin from "./plugins/vuetify";
import "./plugins/tailwindcss";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetifyPlugin);

app.mount("#app");

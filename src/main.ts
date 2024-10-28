import { createPinia } from "pinia";
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

import "./styles.css";
import "animate.css";
import "remixicon/fonts/remixicon.css";

// Minimalistic but perfect custom scrollbar plugin
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';


import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css"; // optional for styling

// mount App
createApp(App)
	.use(router)
	.use(createPinia())
	.use(VueTippy, {
		directive: "tippy", // => v-tippy
		component: "tippy", // => <tippy/>
		componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
		defaultProps: {
			placement: "auto-end",
			allowHTML: true,
		}, // => Global default options * ssee all props
	})
	.use(PerfectScrollbarPlugin)
	.mount("#app");

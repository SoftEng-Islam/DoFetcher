import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

import "./styles.css";
import "animate.css";
import "remixicon/fonts/remixicon.css";

// Minimalistic but perfect custom scrollbar plugin
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "./styles/PerfectScrollbar.css";

import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css"; // optional for styling

// mount App
createApp(App)
	.use(createPinia())
	.use(VueTippy, {
		directive: "tippy", // => v-tippy
		component: "tippy", // => <tippy/>
		componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
		defaultProps: {
			placement: "auto-end",
			allowHTML: true,
		}, // => Global default options * see all props
	})
	.mount("#app");

import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import SettingsView from "../views/SettingsView.vue";
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/HomeView.vue"),
			// component: HomeView,
		},
		{
			path: "/settings",
			name: "settings",
			// this generates a separate chunk (settings.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/SettingsView.vue"),
		},
	],
});

export default router;

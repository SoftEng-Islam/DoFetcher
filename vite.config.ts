import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const options = { } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }
import pugPlugin from "vite-plugin-pug";
import { transform } from "typescript";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	plugins: [pugPlugin(options, locals), vue()],
	clearScreen: false, // 1. prevent vite from obscuring rust errors
	// 2. tauri expects a fixed port, fail if that port is not available
	server: {
		port: 1420,
		strictPort: true,
		watch: {
			// 3. tell vite to ignore watching `src-tauri`
			ignored: ["**/src-tauri/**"],
		},
	},
}));

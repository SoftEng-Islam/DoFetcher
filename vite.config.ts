import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuePugPlugin from "vite-plugin-pug";
import tailwindcss from "@tailwindcss/vite";

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	plugins: [
		vue({
			template: {
				preprocessOptions: {
					// 'preprocessOptions' is passed through to the pug compiler
					plugins: [vuePugPlugin],
				},
			},
		}),
		tailwindcss(),
	],
	clearScreen: false, // 1. prevent vite from obscuring rust errors
	// 2. tauri expects a fixed port, fail if that port is not available
	server: {
		port: 1421,
		strictPort: true,
		host: host || false,
		hmr: host
			? {
					protocol: "ws",
					host,
					port: 1421,
			  }
			: undefined,
		watch: {
			// 3. tell vite to ignore watching `src-tauri`
			ignored: ["**/src-tauri/**"],
			include: ["src/**/*.vue", "src/**/*.ts"], // or other paths you need
		},
	},
}));

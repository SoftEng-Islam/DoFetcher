import { defineStore } from "pinia";
import type { StoreDefinition } from "pinia";

import { DownloadsList } from "./downloads.json";

// When using the Tauri API npm package:
import { invoke } from "@tauri-apps/api/core";

// When using the Tauri global script (if not using the npm package)
// Be sure to set `app.withGlobalTauri` in `tauri.conf.json` to true
// const invoke = window.__TAURI__.core.invoke;

// Define an interface for your settings object
interface AppSettings {
	AppName: string;
	// Add other properties that are in your settings.json
}

export const useSettingsStore = defineStore("settings", {
	state: () => ({
		settings: {
			AppName: "DoFetcher",
		},
		downloads: DownloadsList,
	}),
	actions: {
		async loadSettings() {
			const path = "./settings.json";
			this.settings = await invoke("read_settings_file", { path });
		},
		async saveSettings() {
			const path = "./settings.json";
			await invoke("write_settings_file", { path, settings: this.settings });
		},
	},
});

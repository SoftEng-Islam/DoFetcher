<script setup lang="ts">
import { ref } from "vue";
// import xterm from './xterm.vue';
let statusbarActiveTab = ref<number>(0);
function setActiveTab(tab: number): void {
	// console.log(tab);
	statusbarActiveTab.value = tab;
}
</script>
<template lang="pug">
div(class="fixed bottom-0 h-auto w-full flex flex-col item-center justify-center bg-[var(--LTheme2)] dark:bg-[var(--Theme2)] text-green-300 ")
	//- The Head of bottom status bar
	ul(class="w-full h-8 flex items-center justify-start p-4")
		//- Status Tab
		li(v-show="true" class="flex items-center h-8 p-3 text-white dark:text-white hover:opacity-100 rounded-t-lg border-b-4 border-2 hover:cursor-pointer" :class="statusbarActiveTab === 1 ? 'opacity-100 border-[var(--light-fav-color)] dark:border-[var(--dark-fav-color)] border-b-4': 'opacity-50 border-transparent'")
			button(type="button" @click="setActiveTab(1)") Status
		// Output Tab
		li(v-show="true" class="flex items-center h-8 p-3 text-white dark:text-white hover:opacity-100 rounded-t-lg border-b-4 border-2 hover:cursor-pointer" :class="statusbarActiveTab === 2 ? 'opacity-100 border-[var(--light-fav-color)] dark:border-[var(--dark-fav-color)] border-b-4': 'opacity-50 border-transparent'")
			button(type="button" @click="setActiveTab(2)") Output
		// Errors Tab
		li(v-show="true" class="flex items-center h-8 p-3 text-white dark:text-white hover:opacity-100 rounded-t-lg border-b-4 border-2 hover:cursor-pointer" :class="statusbarActiveTab === 3 ? 'opacity-100 border-[var(--light-fav-color)] dark:border-[var(--dark-fav-color)] border-b-4': 'opacity-50 border-transparent'")
			button(type="button" @click="setActiveTab(3)") Errors
	div(v-show="false" class="p-3 w-full h-32 overflow-hidden bg-[var(--light-fav-color)] dark:bg-[var(--dark-fav-color)]")
		| content
</template>

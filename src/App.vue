<script setup lang="ts">
import DokuHeader from "./components/Header.vue";
// import DokuList from "./components/DokuList.vue";
import StatusBar from "./components/StatusBar.vue";
// import SelectOptions from "./components/SelectOptions.vue";
// import Greet from "./components/Greet.vue";
</script>

<template lang="pug">
<DokuHeader/>
//- Functions
div(class="w-full h-11 px-4 flex items-center justify-center bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
	ul(class="w-full flex items-center gap-4 text-gray-400")
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-download-2-fill ri-lg text-black dark:text-white animate__animated animate__heartBeat animate__infinite"></i>
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-play-large-fill ri-lg"></i>
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-pause-mini-fill ri-lg"></i>
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-delete-bin-2-fill ri-lg"></i>
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-folder-transfer-fill ri-lg"></i>
//- Tags
div(class="h-10 w-full pt-2 flex items-center justify-center bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	ul(class="h-full w-full flex items-center justify-center gap-4 text-gray-500")
		li(class="h-full py-1 px-2 rounded-t-lg underline font-bold text-white bg-[var(--Theme4)] dark:bg-[var(--Theme4)]") All
		li(class="") Active
		li(class="") Completed
		li(class="") Torrent
		li(class="") Video
		li(class="") Music

//- Content
div(class="relative left-0 w-full h-full overflow-hidden bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	//- <DokuList/>
	//- Download list
	div(class="w-full h-full flex flex-col items-center justify-center rounded-3xl rounded-b-none bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
		//- <StatusBar/>

div(v-bind:hidden="true" class="w-96 h-48 p-2 text-center text-lg font-bold text-white rounded-3xl fixed flex gap-5 flex-col items-center justify-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] border-dashed border-red-200 border-2")
	p Download List is Empty.
	p(class="text-gray-400") Add new Download URL.
</template>

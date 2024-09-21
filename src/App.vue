<script setup lang="ts">
import DokuHeader from "./components/DokuHeader.vue";
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
div(class="w-full p-2 flex items-center justify-center bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	ul(class="w-full flex items-center justify-center gap-2 text-gray-400")
		li(class="text-white") All
		li(class="") Active
		li(class="") Completed
		li(class="") Torrent
		li(class="") Video
		li(class="") Music



div(class="relative left-0 w-full h-[var(--DokuListsHeight)]")
	//- <DokuList/>
//- <Greet/>
<StatusBar/>
div(class="w-96 h-48 p-2 text-center text-lg font-bold text-white rounded-3xl fixed flex gap-5 flex-col items-center justify-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] border-dashed border-red-200 border-2")
	p Download List is Empty.
	p(class="text-gray-400") Add new Download URL.
</template>

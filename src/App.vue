<script setup lang="ts">
import Header from "./components/Header.vue";
import StatusBar from "./components/StatusBar.vue";
import AddNewWarn from "./components/AddNewWarn.vue";
</script>

<template lang="pug">
<Header/>

//- Tags
div(class="h-10 w-full pt-2 flex items-center justify-center bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	ul(class="h-full w-full flex items-center justify-center gap-4 text-gray-500")
		li(class="h-full py-1 px-2 rounded-t-lg underline font-bold text-white bg-[var(--Theme4)] dark:bg-[var(--Theme4)]") All
		li(class="") Active
		li(class="") Completed
		li(class="") Torrent
		li(class="") Video
		li(class="") Music

//- Downloads Information
ul(class="h-10 w-full flex items-center justify-around gap-3 px-4 border border-gray-500")
	li(class="h-full flex gap-2 items-center border-r pr-2")
		input(type="checkbox")
		span(class="text-white") Select All
	li(class="h-full flex items-center justify-center border-r pr-2")
		span(class="text-white") Name
	li(class="h-full flex items-center border-r pr-2")
		span(class="text-white") Status
	li(class="h-full flex gap-2 items-center border-r pr-2")
		span(class="text-white") Speed
	li(class="h-full flex gap-2 items-center border-r pr-2")
		span(class="text-white") Size
	li(class="h-full flex gap-2 items-center")
		span(class="text-white") Added
//- Content
div(class="relative left-0 w-full h-full overflow-hidden bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	//- <DokuList/>
	//- Download list
	div(class="w-full h-full flex flex-col items-center justify-center rounded-3xl rounded-b-none bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
		//- <StatusBar/>

AddNewWarn
</template>

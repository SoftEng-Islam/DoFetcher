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
div(class="w-full")
//- Tags
div(class="w-full p-2")
	ul(class="w-full flex items-center justify-start gap-2 text-white")
		li(class="") All
		li(class="") Active
		li(class="") Completed
		li(class="") Torrent
		li(class="") Video
		li(class="") Music



div(class="relative left-0 w-full h-[var(--DokuListsHeight)]")
	//- <DokuList/>
//- <Greet/>
<StatusBar/>
div(class="w-80 h-40 p-2 text-center text-lg font-bold text-white rounded-3xl fixed flex gap-5 flex-col items-center justify-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] border-dashed border-red-200 border-2")
	p Download List is Empty.
	p(class="text-gray-400") Add new Download URL.
</template>

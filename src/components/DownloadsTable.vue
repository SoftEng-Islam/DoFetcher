<script setup lang="ts">
import { ref } from "vue";
import DownloadTask from "./DownloadTask.vue";
const TableHead = [
	["All", "Videos", "Porn"],
	"Name",
	"Status",
	"Speed",
	"Size",
	"Added",
];
</script>
<template lang="pug">
//- Top Header [ Type| Name | Status | Speed | Size | Added ]
div(class="relative left-0 w-full h-full flex flex-col bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	ul(class="w-full h-10 p-2 px-4 flex gap-2 items-center justify-around")
		li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
			select(class="appearance-none row-start-1 col-start-1 bg-transparent outline-none")
				option {{TableHead[0][0]}}
				option {{TableHead[0][1]}}
				option {{TableHead[0][2]}}
		li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]") {{TableHead[1]}}
		li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]") {{TableHead[2]}}
		li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]") {{TableHead[3]}}
		li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]") {{TableHead[4]}}
		li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]") {{TableHead[5]}}
	//- Download list
	PerfectScrollbar(class="PerfectScrollbar h-[82%] border border-[var(--LTheme4)] dark:border-[var(--Theme4)] w-full p-2 py-10 rounded-3xl rounded-b-none bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
		ul(class="h-auto w-full flex flex-col items-center justify-start gap-10")
			ul(class="relative border border-[var(--LTheme4)] dark:border-[var(--Theme4)] px-2 pt-10 pb-4 w-full flex flex-col items-center justify-start gap-4 rounded-xl")
				//- Group head
				li(class="absolute top-[-1.5rem] z-50 w-1/2 left-5 h-12 flex items-center justify-between gap-2 p-2 border border-[var(--LTheme4)] dark:border-[var(--Theme4)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)] rounded-xl")
					span(class="text-[var(--dark-fav-color)] dark:text-[var(--light-fav-color)]") Group
					span(class="text-[var(--dark-fav-color)] dark:text-[var(--light-fav-color)]") 4/4 Done
				<DownloadTask/>
				<DownloadTask/>
				<DownloadTask/>
				<DownloadTask/>
				<DownloadTask/>
</template>
<style scoped lang="scss">
.PerfectScrollbar {
	--tw-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.245);
	--tw-shadow-colored: inset 0 2px 10px 0 var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
		var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>

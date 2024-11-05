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
//- Top Header [Type| Name | Status | Speed | Size | Added]
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
	PerfectScrollbar(class="h-[80%] border border-[var(--LTheme4)] dark:border-[var(--Theme4)] w-full p-5 py-10 rounded-3xl rounded-b-none bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
		ul(class="h-auto w-full flex flex-col items-center justify-start gap-4")
			<DownloadTask/>
			<DownloadTask/>
			<DownloadTask/>
			<DownloadTask/>
			hr
			<DownloadTask/>
			<DownloadTask/>
			<DownloadTask/>
			<DownloadTask/>
			hr
			<DownloadTask/>
			<DownloadTask/>
			<DownloadTask/>
			<DownloadTask/>
</template>

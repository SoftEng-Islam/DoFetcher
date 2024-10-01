<script setup lang="ts">
const TableHead = ["Type", "Name", "Status", "Speed", "Size", "Added"];
const columns = ["Name", "Age", "Country"];
const DownList = [
	{
		name: "Harry Potter 1",
		status: false,
		progress:32,
		speed: 192,
		size: 100,
		added: "2024/9/15",
	},
	{
		name: "Harry Potter 2",
		status: 30,
		progress:41,
		speed: 192,
		size: 100,
		added: "2024/9/15",
	},
	{
		name: "Harry Potter 3",
		status: 22,
		progress:64,
		speed: 192,
		size: 100,
		added: "2024/9/15",
	},
];

const tableRows = 10;
const tableCols = 10;
</script>
<template lang="pug">
//- Top Header [Type| Name | Status | Speed | Size | Added]
ul(class="w-full h-10 p-2 px-4 flex gap-2 items-center justify-around text-gray-500 bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	li(class="w-full flex justify-center rounded-lg font-bold text-gray-900 dark:text-gray-400 bg-[var(--LTheme1)] dark:bg-[var(--Theme1)]") {{TableHead[0]}}
	li(class="w-full flex justify-center rounded-lg font-bold text-gray-900 dark:text-gray-400 bg-[var(--LTheme1)] dark:bg-[var(--Theme1)]") {{TableHead[2]}}
	li(class="w-full flex justify-center rounded-lg font-bold text-gray-900 dark:text-gray-400 bg-[var(--LTheme1)] dark:bg-[var(--Theme1)]") {{TableHead[3]}}
	li(class="w-full flex justify-center rounded-lg font-bold text-gray-900 dark:text-gray-400 bg-[var(--LTheme1)] dark:bg-[var(--Theme1)]") {{TableHead[4]}}
	li(class="w-full flex justify-center rounded-lg font-bold text-gray-900 dark:text-gray-400 bg-[var(--LTheme1)] dark:bg-[var(--Theme1)]") {{TableHead[5]}}
	li(class="w-full flex justify-center rounded-lg font-bold text-gray-900 dark:text-gray-400 bg-[var(--LTheme1)] dark:bg-[var(--Theme1)]") {{TableHead[4]}}
div(class="relative left-0 w-full h-full overflow-hidden bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	//- Download list
	ul(class="w-full h-full p-4 pt-5 flex flex-col items-center justify-start gap-4 rounded-3xl rounded-b-none bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
		li(class="p-2 w-full h-24 flex items-center rounded-2xl bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] shadow-sm hover:shadow-xl")
			//- Image & icon & type of the file
			div(class="w-28 h-20 rounded-xl bg-[var(--LTheme1)] border border-gray-500")
			//- Container
			div(class="w-full h-full ml-2 flex flex-col items-start justify-center overflow-hidden rounded-xl text-gray-500 dark:text-gray-300 dark:bg-[var(--Theme3)]")
				//- Name[title]
				div(class="w-full pl-3 h-1/2 flex items-center bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
					h2(class="") {{DownList[0].name}}
				div(class="w-full h-1/2 py-1 px-3 bg-[var(--LTheme3)]  dark:bg-[var(--Theme3)] flex items-center justify-between gap-2")
					//- status
					div(class="w-full h-full py-2 px-4 flex items-center justify-between rounded-full bg-[var(--LTheme4)] dark:bg-[var(--Theme4)]")
						span(class="mr-1") #[i(class="ri-lg" :class="DownList[0].status? 'ri-play-line' : 'ri-pause-line' ")]
						span(class="text-blue-500") {{DownList[0].progress}}
							span(class="text-red-500") /100%
					//- speed
					div(class="w-full h-full py-2 px-4 flex items-center justify-between rounded-full bg-[var(--LTheme4)] dark:bg-[var(--Theme4)]")
						i(class="ri-speed-up-line ri-lg")
					//- Size
					div(class="w-full h-full py-2 px-4 flex items-center justify-between rounded-full bg-[var(--LTheme4)] dark:bg-[var(--Theme4)]")
						i(class="ri-file-download-line ri-lg")
					//- Added
					div(class="w-full h-full py-2 px-4 flex items-center justify-between rounded-full bg-[var(--LTheme4)] dark:bg-[var(--Theme4)]")
						i(class="ri-time-line ri-lg")
</template>

<script setup lang="ts">
const TableHead = ["Type", "Name", "Status", "Speed", "Size", "Added"];
const columns = ["Name", "Age", "Country"];
const rows = [
	{
		name: "Harry Potter 1",
		status: 25,
		speed: 192,
		size: 100,
		added: "2024/9/15",
	},
	{
		name: "Harry Potter 2",
		status: 30,
		speed: 192,
		size: 100,
		added: "2024/9/15",
	},
	{
		name: "Harry Potter 3",
		status: 22,
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
	ul(class="w-full h-full p-4 pt-5 flex flex-col items-center justify-start gap-4 text-white rounded-3xl rounded-b-none bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
		li(class="p-2 w-full h-24 flex items-center rounded-2xl bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] shadow-sm hover:shadow-xl")
			//- Image & icon & type of the file
			div(class="w-28 h-20 rounded-2xl bg-[var(--LTheme1)] border border-gray-500")
			//- Name
			//- status
			//- speed
			//- Size
			//- Added
</template>

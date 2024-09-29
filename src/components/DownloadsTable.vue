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
ul(class="w-full h-10 p-2 flex gap-2 items-center justify-around text-gray-500 bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	li(class="w-full flex justify-center border-r") {{TableHead[0]}}
	li(class="w-full flex justify-center border-r") {{TableHead[2]}}
	li(class="w-full flex justify-center border-r") {{TableHead[3]}}
	li(class="w-full flex justify-center border-r") {{TableHead[4]}}
	li(class="w-full flex justify-center border-r") {{TableHead[5]}}
	li(class="w-full flex justify-center") {{TableHead[4]}}
div(class="relative left-0 w-full h-full overflow-hidden bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	//- Download list
	div(class="w-full h-full flex flex-col items-center justify-center rounded-3xl rounded-b-none bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
	ul(class=" flex flex-col gap-2 items-center justify-center w-full p-2 text-white")
		li(class="p-2 w-full h-24 flex items-center rounded-lg bg-gray-800")
			//- Image & icon & type of the file
			div(class="w-20 h-20 bg-slate-500 rounded-md")
			//- Name
			//- status
			//- speed
			//- Size
			//- Added
		li(class="p-2 w-full h-24 flex items-center rounded-lg bg-gray-800")
			div(class="w-20 h-20 bg-slate-500 rounded-md")

</template>

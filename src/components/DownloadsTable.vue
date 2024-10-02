<script setup lang="ts">
import { ref } from 'vue';
const TableHead = [["All","Videos","Porn"], "Name", "Status", "Speed", "Size", "Added"];
const DownList = ref([
	{
		name: "Harry Potter 1",
		status: false,
		progress:32,
		speed: 192,
		size: 100,
		added: "2024/9/15",
		selected: true
	},
	{
		name: "Harry Potter 2",
		status: 30,
		progress:41,
		speed: 192,
		size: 100,
		added: "2024/9/15",
		selected: false
	},
	{
		name: "Harry Potter 3",
		status: 22,
		progress:64,
		speed: 192,
		size: 100,
		added: "2024/9/15",
		selected: false
	},
]);

const toggleStatus = () => {
	DownList.value[0].status = !DownList.value[0].status;
};

const toggleSelect = () => {
	DownList.value[0].selected = !DownList.value[0].selected;
};

</script>
<template lang="pug">
//- Top Header [Type| Name | Status | Speed | Size | Added]
ul(class="w-full h-10 p-2 px-4 flex gap-2 items-center justify-around text-gray-500 bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]") {{TableHead[0][1]}}
	li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]") {{TableHead[1]}}
	li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]") {{TableHead[2]}}
	li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]") {{TableHead[3]}}
	li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]") {{TableHead[4]}}
	li(class="w-full flex justify-center rounded-lg font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]") {{TableHead[5]}}
div(class="relative left-0 w-full h-full overflow-hidden bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
	//- Download list
	ul(class="w-full h-full p-4 pt-5 flex flex-col items-center justify-start gap-4 rounded-3xl rounded-b-none bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
		li(class="relative p-2 w-full h-24 flex items-center rounded-2xl bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] shadow-sm hover:shadow-xl")
			button(v-on:click="toggleSelect" type="button" class="fixed w-8 h-8 left-1 flex items-center justify-center rounded-full bg-[var(--LTheme4)] dark:bg-[var(--Theme4)]")
				<i v-show="!DownList[0].selected" class="ri-checkbox-blank-circle-line ri-lg text-[var(--Theme4)] dark:text-[var(--LTheme4)]"></i>
				<i v-show="DownList[0].selected" class="ri-checkbox-circle-line ri-xl text-[var(--Theme4)] dark:text-[var(--LTheme4)]"></i>
			//- Image & icon & type of the file
			div(class="w-28 h-20 rounded-xl bg-[var(--LTheme3)] dark:bg-[var(--Theme3)] shadow-lg ")
			//- Container
			div(class="w-full h-full ml-2 flex flex-col items-start justify-center overflow-hidden rounded-xl text-gray-500 dark:text-gray-300 dark:bg-[var(--Theme3)]")
				//- Name[title]
				div(class="w-full pl-4 h-1/2 flex items-center bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]")
					h2(class="") {{DownList[0].name}}
				div(class="w-full h-1/2 py-1 px-3 bg-[var(--LTheme3)] dark:bg-[var(--Theme3)] flex items-center justify-between gap-2 select-none")
					//- status
					div(class="w-full h-full py-2 px-4 flex items-center justify-between rounded-full bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] hover:shadow-md select-none")
						span(class="mr-1 cursor-pointer" v-on:click="toggleStatus") #[i(class="ri-lg" :class="DownList[0].status? 'ri-play-line' : 'ri-pause-line' ")]
						span(class="text-blue-500") {{DownList[0].progress}}
							span(class="text-red-500") /100%
					//- speed
					div(class="w-full h-full py-2 px-4 flex items-center justify-between rounded-full bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] hover:shadow-md cursor-default select-none")
						i(class="ri-speed-up-line ri-lg")
					//- Size
					div(class="w-full h-full py-2 px-4 flex items-center justify-between rounded-full bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] hover:shadow-md cursor-default select-none")
						i(class="ri-file-download-line ri-lg")
					//- Added
					div(class="w-full h-full py-2 px-4 flex items-center justify-between rounded-full bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] hover:shadow-md cursor-default select-none")
						i(class="ri-time-line ri-lg")
</template>

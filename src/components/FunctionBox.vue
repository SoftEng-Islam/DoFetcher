<script setup lang="ts"></script>
<template lang="pug">
//- Functions Box [Download,Resume,Puse,Remove,Move]
div(class="w-full h-16 p-4 flex items-center justify-center bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
	ul(class="w-full flex items-center gap-4 text-gray-400")
		li(class="relative h-8 mr-auto overflow-hidden flex items-center justify-center rounded-md bg-[var(--LTheme4)] dark:bg-[var(--Theme4)]")
			<i class="absolute left-2 ri-download-2-fill ri-lg text-[var(--Theme1)] dark:text-[var(--LTheme1)] animate__animated animate__heartBeat animate__infinite"></i>
			input(type="URL" class="h-full w-full bg-transparent pl-10 pr-4 focus:placeholder:opacity-0 text-ellipsis" placeholder="https://youtube.com/video")
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-play-large-fill ri-lg"></i>
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-pause-mini-fill ri-lg"></i>
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-delete-bin-2-fill ri-lg"></i>
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-folder-transfer-fill ri-lg"></i>
</template>

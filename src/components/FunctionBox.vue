<script setup lang="ts"></script>
<template lang="pug">
//- Functions Box [Download,Resume,Puse,Remove,Move]
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
</template>

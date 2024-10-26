<script setup lang="ts">
const toggleSelectAll = () => {
	
};
</script>
<template lang="pug">
//- Functions Box(Under The First Top Header) [Download,Resume,Pause,Remove,Move]
div(class="w-full h-16 p-4 flex items-center justify-center bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
	ul(class="w-full flex items-center gap-4 text-gray-400")
		//- Select All(or unSelect All) for current category (All || videos || music ...)
		li(v-tippy="{content: 'Select All'}" class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-checkbox-blank-circle-line ri-lg"></i>
			<i v-show="false" class="ri-checkbox-circle-line ri-lg"></i>
		//- Resume the current selected download tasks
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-play-large-fill ri-lg"></i>
		//- Pause the current selected download tasks
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-pause-mini-fill ri-lg"></i>
		//- Remove from the list (not deleted from Disk)
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-delete-bin-2-fill ri-lg"></i>
		//- Move to other Place On the harddrive
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			<i class="ri-folder-transfer-fill ri-lg"></i>
		//- The Right Side ["URL input", "submit button"]
		li(class="h-8 ml-auto overflow-hidden flex items-center justify-center rounded-md bg-[var(--LTheme4)] dark:bg-[var(--Theme4)]")
			input(type="URL" class="h-full w-full bg-transparent px-4 focus:placeholder:opacity-0 text-ellipsis" placeholder="https://youtube.com/video")
		li(class="w-8 h-8 bg-[var(--LTheme4)] dark:bg-[var(--Theme4)] rounded-md flex items-center justify-center")
			button(class="w-full h-full flex items-center justify-center" type="button")
				<i class="ri-download-2-fill ri-lg text-[var(--Theme1)] dark:text-[var(--LTheme1)] animate__animated animate__heartBeat animate__infinite"></i>
</template>
<script setup lang="ts"></script>
<template lang="pug">
//- Downloads Information
ul(class="h-10 w-full flex items-center justify-around gap-3 px-4 border border-gray-500")
	li(class="h-full flex gap-2 items-center border-r pr-2")
		input(type="checkbox")
		span(class="text-white") Select All
	li(class="h-full flex items-center justify-center border-r pr-2")
		span(class="text-white") Name
	li(class="h-full flex items-center border-r pr-2")
		span(class="text-white") Status
	li(class="h-full flex gap-2 items-center border-r pr-2")
		span(class="text-white") Speed
	li(class="h-full flex gap-2 items-center border-r pr-2")
		span(class="text-white") Size
	li(class="h-full flex gap-2 items-center")
		span(class="text-white") Added
</template>

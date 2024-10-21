<script setup lang="ts">
defineProps({
	isLoading: {
		type: Boolean,
		required: true,
	},
});
</script>
<template lang="pug">
div(v-if="isLoading" class="preloader")
	div(class="spinner")
</template>

<style scoped>
.preloader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgb(53, 53, 53);
	z-index: 1000;
}
</style>

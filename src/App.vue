<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import AppPreloader from "./components/AppPreloader.vue";
import AppHeader from "./components/AppHeader.vue";
const isLoading = ref(true);

onMounted(() => {
	// Simulate loading process (replace with actual async call)
	setTimeout(() => {
		isLoading.value = false;
	}, 4500);
});
</script>

<template lang="pug">
<AppPreloader :isLoading="isLoading" />
div(class="h-full w-full" :class="isLoading == true ? 'blur-lg':''")
	<AppHeader/>
	<RouterView />
</template>

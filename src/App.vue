<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import AppPreloader from "./components/AppPreloader.vue";
import AppHeader from "./components/AppHeader.vue";
import AddNewWarn from "./components/AddNewWarn.vue";
import FunctionBox from "./components/FunctionBox.vue";
import DownloadsTable from "./components/DownloadsTable.vue";
import StatusBar from "./components/StatusBar.vue";
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
div(v-if="!isLoading" class="h-full w-full")
	<AddNewWarn/>
	<AppHeader/>
	<RouterView />
		<FunctionBox/>
		<DownloadsTable/>
		<StatusBar/>
</template>

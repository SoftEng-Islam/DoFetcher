<script setup lang="ts">
import AppPreloader from "./components/AppPreloader.vue";
import AppHeader from "./components/Header.vue";
import AddNewWarn from "./components/AddNewWarn.vue";
import FunctionBox from "./components/FunctionBox.vue";
import DownloadsTable from "./components/DownloadsTable.vue";
import StatusBar from "./components/StatusBar.vue";
</script>

<template lang="pug">
<AppPreloader/>
<AddNewWarn/>
<AppHeader/>
<FunctionBox/>
<DownloadsTable/>
<StatusBar/>
</template>

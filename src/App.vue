<script setup lang="ts">
import AppHeader from "./components/Header.vue";
import StatusBar from "./components/StatusBar.vue";
import AddNewWarn from "./components/AddNewWarn.vue";
import TagsBar from "./components/TagsBar.vue";
import DownloadsTable from "./components/DownloadsTable.vue";
import AppContent from "./components/AppContent.vue";
</script>

<template lang="pug">
<AddNewWarn/>
<AppHeader/>
<TagsBar/>
<DownloadsTable/>
<AppContent/>
<StatusBar/>
</template>

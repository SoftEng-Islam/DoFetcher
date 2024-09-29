<script setup lang="ts">
import { ref } from "vue";
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
// import { AgGridVue } from "ag-grid-vue3"; // Vue Data Grid Component

// Row Data: The data to be displayed.
const rowData = ref([
	{ make: "Tesla", model: "Model Y", price: 64950, electric: true },
	{ make: "Ford", model: "F-Series", price: 33850, electric: false },
	{ make: "Toyota", model: "Corolla", price: 29600, electric: false },
]);
// Column Definitions: Defines the columns to be displayed.
const colDefs = ref([
	{ field: "make" },
	{ field: "model" },
	{ field: "price" },
	{ field: "electric" },
]);
</script>
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
		<!-- The AG Grid component -->
//- ag-grid-vue(:rowData="rowData" :columnDefs="colDefs" style="height: 500px" class="ag-theme-quartz")
div(class="table-container")
	table(class="custom-table")
		thead
			tr
				th(v-for="column in columns" :key="column") {{ column }}
		tbody
			tr(v-for="row in rows" :key="row.name")
				td(v-for="column in columns" :key="column")
					//- Dynamically match column with row data
					{{ row[column.toLowerCase()] }}
</template>

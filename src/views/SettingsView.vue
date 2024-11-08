<script setup lang="ts">
import { ref } from 'vue';
const rows = ref(10);
const cols = ref(10);
let hoverdRows = ref(null);
let hoverdCols = ref(null);

const printCell = (_row: Number, _col: Number) => {
	console.log(_row, _col);
};
const showCellsEffect = (_row: Number, _col: Number) => {
	console.clear();
	console.log(_row, _col);
	hoverdRows = _row;
	hoverdCols = _col;
};
</script>
<template lang="pug">
h1 Settings Page
section
	table
		tbody
			tr(v-for="row in rows" data-row="row")
				td(v-for="col in cols" :class="col <= hoverdCols && row <= hoverdRows ? 'active':''" :data-cell-col="col" :data-cell-row="row" @mouseenter="showCellsEffect(row,col)" @click="printCell(row,col)") {{ row }} x {{ col }}
</template>

<style lang="scss">
table {
	background-color: black;
	border: 1px solid yellow;
	border-radius: 10px;
	padding: 5px;
	td {
		background-color: rgb(53, 55, 61);
		text-align: center;
		padding: 2px 3px;
		font-weight: bold;
		border-radius: 6px;
		border: 2px solid black;
		cursor: pointer;
		transition-duration: 0.2s;
	}
	td:hover {
		transform: scale(0.8);
	}
}
.active {
	background-color: red !important;
}
</style>

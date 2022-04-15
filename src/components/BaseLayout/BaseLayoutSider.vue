<script setup lang="ts">
defineProps({
	width: {
		type: Number,
		default: 122,
	},
});
</script>

<template>
	<aside class="base-layout--sider" :style="{ width: width + 'px' }">
		<slot />
	</aside>
</template>

<style scoped lang="scss">
@import "./baseLayout.scss";
</style>

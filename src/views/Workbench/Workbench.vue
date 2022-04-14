<script setup lang="ts">
import { RouterView } from "vue-router";
import BaseNavigation from "@/components/BaseNavigation/BaseNavigation.vue";
</script>

<template>
	<div class="workbench">
		<var-row>
			<var-col :span="2">
				<BaseNavigation mode="vertical" />
			</var-col>
			<var-col :span="22">
				<RouterView />
			</var-col>
		</var-row>
	</div>
</template>

<style scoped lang="scss">
@import "./workbench.scss";
</style>

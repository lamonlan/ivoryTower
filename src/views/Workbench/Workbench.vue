<script setup lang="ts">
import { RouterView } from "vue-router";
import BaseLayout from "@/components/BaseLayout";
import BaseNavigation from "@/components/BaseNavigation/BaseNavigation.vue";
console.log(BaseLayout);
</script>

<template>
	<div class="workbench">
		<BaseLayout>
			<BaseLayout.Sider>
				<BaseNavigation mode="vertical" />
			</BaseLayout.Sider>
			
			<BaseLayout.Content>
				<RouterView />
			</BaseLayout.Content>
		</BaseLayout>
	</div>
</template>

<style scoped lang="scss">
@import "./workbench.scss";
</style>

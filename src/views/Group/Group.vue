<script setup lang="ts">
import BaseLayout from "../../components/BaseLayout";
</script>

<template>
	<BaseLayout>
		<BaseLayout.Sider :width="277"> Sider </BaseLayout.Sider>
		<BaseLayout.Content> Content </BaseLayout.Content>
	</BaseLayout>
</template>

<style scoped lang="scss">
@import "./group.scss";
</style>

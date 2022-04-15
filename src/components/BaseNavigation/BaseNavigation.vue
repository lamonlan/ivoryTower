<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";
import { routes } from "@/router";
import { props } from "./props";

const $route = useRoute();

const { mode } = defineProps(props);

const renderRoutes = () => {
	let $routes = routes;
	if ($route.matched.length > 1 && mode === "vertical") {
		$routes =
			routes.find((route) => route.name === $route.matched[0].name)!
				.children || [];
	}

	return $routes.filter((route) => route.meta.mode === mode);
};
</script>

<template>
	<ul class="base-navigation" :class="`base-navigation--${mode}`">
		<li
			v-for="{ name, path, meta: { title } } in renderRoutes()"
			:key="name"
		>
			<RouterLink :to="path">
				{{ title }}
			</RouterLink>
		</li>
	</ul>
</template>

<style scoped lang="scss">
@import "./baseNavigation.scss";
</style>

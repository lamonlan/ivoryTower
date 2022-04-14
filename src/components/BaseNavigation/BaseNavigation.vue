<script setup lang="ts">
import { RouterLink } from "vue-router";
import { routes } from "@/router";
import { props } from "./props";

const { mode } = defineProps(props);

const renderRoutes = () => {
  switch (mode) {
    case "horizontal":
      return routes.filter((route) => route.meta.mode === "horizontal");
    default:
      return routes[0].children.filter(
        (route) => route.meta.mode === "vertical"
      );
  }
};
</script>

<template>
  <ul class="base-navigation" :class="`base-navigation--${mode}`">
    <li v-for="route in renderRoutes()" :key="route.name">
      <RouterLink :to="route.path">
        {{ route.meta.title }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import "./baseNavigation.scss";
</style>

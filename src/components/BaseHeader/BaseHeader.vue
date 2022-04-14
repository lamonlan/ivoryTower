<script setup lang="ts">
import { RouterLink } from "vue-router";
import BaseNavigation from "@/components/BaseNavigation/BaseNavigation.vue";
</script>

<template>
  <header class="base-header">
    <var-row>
      <var-col :span="4" class="base-header__logo">
        <RouterLink to="/">
          <img src="@/assets/img/logo.svg" alt="logo" />
          <h1>ivoryTower</h1>
        </RouterLink>
      </var-col>
      <var-col :span="18" class="base-header__navigation">
        <BaseNavigation />
      </var-col>
      <var-col :span="2" class="base-header__login"> 登陆 / 注册 </var-col>
    </var-row>
  </header>
</template>

<style scoped lang="scss">
@import "./baseHeader.scss";
</style>

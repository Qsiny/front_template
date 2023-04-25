<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn";
const locale = zhCn;
</script>

<template>
  <div class="m-5" :locale="locale">
    <router-view></router-view>
  </div>
  <div></div>
</template>ß

<style scoped></style>

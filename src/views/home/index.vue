<template>
  <div>
    this is a message
  </div>
</template>

<script setup lang="ts">


ElMessage.success({ message: 'welcome', duration: 1000 });
ElNotification({
  title: 'Issue',
  message: 'If you encounter problems in using the template, please raise them in the issue',
  duration: 0,
});

</script>

<style lang="css" scoped></style>

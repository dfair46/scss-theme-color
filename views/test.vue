<template>
  <div class='theme-color'>啦啦啦</div>
  <div class='scss-theme-color'>啦啦啦2</div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import '../../scss-color.scss';

.theme-color {
  color: var(--theme-color)
}
.scss-theme-color {
  color: $theme-color
}
</style>

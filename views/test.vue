<template>
  <div class='theme-color'>啦啦啦</div>
  <div class='scss-theme-color'>啦啦啦2</div>
  <div class='animate-icon'></div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import '../scss-color.scss';

.theme-color {
  color: var(--theme-color);
  font-size: $getpx(14);
}
.scss-theme-color {
  color: $theme-color;
  @include overflow-ellipsis(2);
}

.animate-icon{
  width: 20px;
  height: 20px;
  background: green
  animation: rotate 1.5s linear infinite; /* 添加旋转动画，无限循环 */
}
</style>

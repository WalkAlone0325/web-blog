<template>
  <div class="main-view">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.main-view {
  width: 100%;
  min-height: calc(100vh - 164px);
}
</style>

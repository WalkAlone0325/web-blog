<template>
  <the-header></the-header>
  <app-main>
    <keep-alive>
      <router-view />
    </keep-alive>
  </app-main>
  <the-footer></the-footer>
</template>

<script>
import { defineComponent } from 'vue'
import TheHeader from './layout/TheHeader'
import TheFooter from './layout/TheFooter'
import AppMain from './layout/AppMain'

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
    AppMain,
  },
})
</script>

<style lang="scss">
// .router-link-exact-active,
// .router-link-active {
//   background: steelblue;
//   color: #fff;
// }
</style>

<template>
  <the-header></the-header>
  <app-main>
    <keep-alive>
      <router-view v-slot="{ Component }">
        <transition mode="slide-fade">
          <component :is="Component" />
        </transition>
      </router-view>
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
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

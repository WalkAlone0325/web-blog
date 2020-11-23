<template>
  <div class="header-container">
    <header class="basic-header">
      <div class="logo">
        <h3 class="logo-title">Loner</h3>
        <span class="logo-img">logo</span>
      </div>
      <div class="menu">
        <ul class="menu-list">
          <router-link
            v-for="item in menulist"
            :key="item.path"
            :to="item.path"
            custom
            v-slot="{ navigate, isActive, isExactActive }"
          >
            <li
              :class="[
                'menu-item',
                isActive && 'router-link-active',
                isExactActive && 'router-link-exact-active',
              ]"
              @click="navigate"
            >
              {{ item.title }}
            </li>
          </router-link>
        </ul>
        <div class="menu-setting">
          <span>黑/白</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const menulist = ref([
      { title: '首页', path: '/home' },
      { title: '文章', path: '/article' },
      { title: '日记', path: '/diary' },
      { title: '生活', path: '/live' },
      { title: '关于', path: '/about' },
    ])

    return { menulist }
  },
})
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 64px;
  background: sandybrown;

  .basic-header {
    width: 86%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .logo {
      height: 64px;
      display: flex;
      .logo-title {
        line-height: 64px;
      }
      .logo-img {
        margin-left: 10px;
        line-height: 64px;
      }
    }
    .menu {
      display: flex;
      .menu-list {
        display: flex;
        .menu-item {
          padding: 0 20px;
          line-height: 64px;
          &:hover {
            background: seashell;
            cursor: pointer;
          }
        }
      }
      .menu-setting {
        line-height: 64px;
      }
    }
  }
}
</style>

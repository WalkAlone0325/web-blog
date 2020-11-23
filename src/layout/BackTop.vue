<template>
  <div class="back-top" v-show="gotop" @click="toTop">Top</div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const gotop = ref(false)

    const handleScroll = () => {
      let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false)
    }

    const toTop = () => {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll, true)
    })

    return { gotop, toTop }
  },
})
</script>

<style lang="scss" scoped>
.back-top {
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 30px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background: white;
  color: #000000;
}
</style>

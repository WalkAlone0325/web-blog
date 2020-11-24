<template>
  <div class="about-page">
    <div>
      <h1>Loner</h1>
      <span>小小的前端开发</span>
      <div>家乡：山西省朔州市</div>
    </div>
    <ProfileCard class="about-profile" />
  </div>
</template>

<script>
import ProfileCard from '../components/ProfileCard'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: { ProfileCard },
})
</script>

<style lang="scss" scoped>
.about-page {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  // .about-profile {
  // }
}
</style>

<template>
  <div>
    <ProfileCard />
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

<style lang="scss" scoped></style>

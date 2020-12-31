<template>
  <div>
    diary

    <div class="card-box">
      <CardBox v-for="i in 6" :key="i" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { defineComponent, onMounted } from 'vue'
import CardBox from '../components/CardBox'

export default defineComponent({
  components: { CardBox },
  setup() {
    // onMounted(async () => {
    // let url = 'http://localhost:7001'
    // const res = axios.get(`/api/diary/lists`)
    // console.log(res)
    // })
  },
})
</script>

<style lang="scss" scoped>
.card-box {
  display: grid;
  margin: 50px 90px auto;
  grid-gap: 20px;
  // cursor: pointer;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
@media (max-width: 700px) {
  .card-box {
    margin: 200px auto;
  }
}
</style>

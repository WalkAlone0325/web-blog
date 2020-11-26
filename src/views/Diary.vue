<template>
  <div>
    diary
    <CardBox v-for="i in 3" :key="i" />
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

<style></style>

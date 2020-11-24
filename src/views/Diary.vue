<template>
  <div>
    diary
    <CardBox v-for="i in 3" :key="i" />
  </div>
</template>

<script>
import CardBox from '../components/CardBox'

export default {
  components: { CardBox },
}
</script>

<style></style>

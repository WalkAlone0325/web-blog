<template>
  <div class="friendly-page">
    <LinkCard :friendlylinkList="friendlylinkList" :toolsLinkList="toolsLinkList" />
  </div>
</template>

<script>
import { defineComponent, ref, getCurrentInstance, onMounted } from 'vue'
import LinkCard from '../components/LinkCard'

export default defineComponent({
  setup() {
    const friendlylinkList = ref([])
    const toolsLinkList = ref([])
    const { ctx } = getCurrentInstance()

    onMounted(() => {
      getFriendlyLink()
      getToolsLink()
    })

    // methods
    const getFriendlyLink = async () => {
      const res = await ctx.$axios('/friendlink')
      friendlylinkList.value = res.data.data
      console.log(res.data)
    }
    const getToolsLink = async () => {
      const res = await ctx.$axios('/toollink')
      toolsLinkList.value = res.data.data
      console.log(res.data)
    }

    return { friendlylinkList, toolsLinkList }
  },
  components: {
    LinkCard,
  },
})
</script>

<style lang="scss">
.friendly-page {
  width: 90%;
  margin: 0 auto;
}
</style>

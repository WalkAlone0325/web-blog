<template>
  <div class="archive-page">
    <div class="page_container">
      <ArchiveItem
        v-for="(item, key, index) in list"
        :key="index"
        :title="key"
        :list="item"
      ></ArchiveItem>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance, onMounted, ref } from 'vue'
import ArchiveItem from '../components/ArchiveItem'
import { timeFormat } from '../utils/util'

export default defineComponent({
  setup() {
    const archiveList = ref([])
    const { ctx } = getCurrentInstance()

    onMounted(() => {
      getArchive()
    })

    const getArchive = async () => {
      const res = await ctx.$axios.get('/article')
      archiveList.value = res.data.data
      archiveList.value.map(item => {
        return {
          _id: item._id,
          title: item.title,
          created: timeFormat(item.created),
          updated: timeFormat(item.updated),
        }
      })
    }

    return { archiveList }
  },
  computed: {
    list() {
      let json = {}
      this.archiveList.forEach(item => {
        let time = item.created.substring(0, 7)
        if (json[time] == null) {
          json[time] = []
        }
        json[time].push(item)
      })
      return json
    },
  },
  components: { ArchiveItem },
})
</script>

<style></style>

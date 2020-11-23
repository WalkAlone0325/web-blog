<template>
  <div class="archive-page">
    <div class="page_container">
      <ArchiveItem v-for="(item, index) in list" :key="index" :list="item"></ArchiveItem>

      <!-- <ArchiveItem :title="archiveList" :list="archiveList"></ArchiveItem> -->
    </div>
  </div>
</template>

<script>
import ArchiveItem from '../components/ArchiveItem'
// import { timeFormat } from '../utils/filters'

export default {
  data() {
    return {
      archiveList: [],
    }
  },
  created() {
    this.getArchive()
  },
  methods: {
    // async getArchive() {
    //   const res = await this.$http.get('/archives')
    //   this.archiveList = res.data.archiveList
    //   this.archiveList.map(item => {
    //     return {
    //       _id: item._id,
    //       title: item.title,
    //       // created: timeFormat(item.created),
    //       // updated: timeFormat(item.updated),
    //     }
    //   })
    // },
    getArchive() {
      this.archiveList = [
        {
          title: '摸宝',
          _id: '1-1',
          created: '2020-11-23',
        },
        {
          title: '凯宝',
          _id: '2-1',
          created: '2020-11-23',
        },
        {
          title: '舟宝',
          _id: '3-1',
          created: '2020-11-23',
        },
        {
          title: '慕宝',
          _id: '4-1',
          created: '2020-11-23',
        },
      ]

      this.archiveList.map(item => {
        return {
          _id: item._id,
          title: item.title,
          created: item.created,
          // created: timeFormat(item.created),
          // updated: timeFormat(item.updated),
        }
      })
    },
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
      console.log(json)
      return json
    },
  },
  components: { ArchiveItem },
}
</script>

<style></style>

<template>
  <div class="about-page">
    <div>
      <h1>{{ settingVal.title }}</h1>
      <span>{{ settingVal.content_info }}</span>
      <div>家乡：山西省朔州市</div>
    </div>
    <ProfileCard class="about-profile" :settingVal="settingVal" :iconList="iconList" />
  </div>
</template>

<script>
import ProfileCard from '../components/ProfileCard'
import { defineComponent, onMounted, getCurrentInstance, ref } from 'vue'

export default defineComponent({
  setup() {
    const settingVal = ref({})
    const iconList = ref([])
    const { ctx } = getCurrentInstance()

    onMounted(() => {
      getSetting()
      getIconList()
    })

    // 获取设置
    const getSetting = async () => {
      const res = await ctx.$axios.get('/setting')
      if (res.data.code === 200) {
        settingVal.value = res.data.data[0]
        console.log(settingVal.value)
      }
    }
    // 获取图标列表
    const getIconList = async () => {
      const res = await ctx.$axios.get('/iconlist')
      if (res.data.code === 200) {
        iconList.value = res.data.data
        console.log(iconList.value)
      }
    }

    return { settingVal, iconList }
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

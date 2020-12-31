<template>
  <div class="home-page">
    <div class="banner-container" :style="`background: url(${settingVal.bg_img}) no-repeat;`">
      <div class="banner-content">
        <h1 class="banner-name">{{ settingVal.avator }}</h1>
        <span class="banner-desc">{{ settingVal.desc }}</span>
      </div>
    </div>
    <div class="content-box">
      <div class="content-desc">
        <h2>{{ settingVal.title }}</h2>
        <div>{{ settingVal.content_info }}</div>
        <span class="content-btn" @click="$router.push('/about')">继续阅读→</span>
      </div>
      <div class="content-img">
        <img :src="settingVal.img_url" alt="" />
      </div>
    </div>
    <ArticleCom :articleList="articleList" />
    <div>123</div>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue'
import ArticleCom from '../components/ArticleCom'

export default defineComponent({
  name: 'Home',
  setup() {
    const articleList = ref([])
    const settingVal = ref({})
    const { ctx } = getCurrentInstance()

    onMounted(() => {
      getArticleList()
      getSetting()
    })

    // methods
    // 获取文章列表
    const getArticleList = async () => {
      // 只取8个在首页
      const res = await ctx.$axios.get('/article?page=1&size=8')
      if (res.data.code === 200) {
        articleList.value = res.data.data
      }
    }
    // 获取设置
    const getSetting = async () => {
      const res = await ctx.$axios.get('/setting')
      if (res.data.code === 200) {
        settingVal.value = res.data.data[0]
      }
    }

    return {
      articleList,
      settingVal,
    }
  },
  components: { ArticleCom },
})
</script>

<style lang="scss" scoped>
.home-page {
  .banner-container {
    width: 100%;
    height: calc(100vh - 64px);
    background: url('../assets/img/20170917.jpg') no-repeat;
    background-size: cover;
    background-position: center 0;
    .banner-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: mediumblue;
    }
  }
  .content-box {
    width: 100%;
    height: calc(100vh - 64px);
    background: #f1f3f5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .content-desc {
      letter-spacing: 2px;
      line-height: 60px;
      h2 {
        font-size: 30px;
      }
      div {
        font-size: 18px;
      }
      .content-btn {
        padding: 10px;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 500;
        color: darkorange;
        &:hover {
          color: #fff;
          background: darkcyan;
          transition: 0.3s;
        }
      }
    }
    .content-img {
      padding: 10px;
      background: #fff;
      border-radius: 8px;
      // border: mediumblue 1px solid;
      box-shadow: 0px 0px 10px #cacbcd;
      img {
        width: 450px;
        height: 450px;
      }
    }
  }
}
</style>

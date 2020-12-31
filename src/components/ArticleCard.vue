<template>
  <div class="article-card">
    <img class="card-img" :src="item.img_url" alt="" />
    <div class="card-content">
      <h4 class="card-title">{{ item.title }}</h4>
      <div class="card-desc">
        {{ item.desc }}
      </div>
    </div>
    <div class="card-foot">
      <span>更新时间：{{ timeFormat(item.updated) }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { timeFormat } from '../utils/util'

export default defineComponent({
  props: ['item'],
  setup() {
    return {
      timeFormat,
    }
  },
})
</script>

<style lang="scss" scoped>
.article-card {
  width: 280px;
  height: 450px;
  margin-top: 30px;
  background: darkcyan;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    box-shadow: 0 0 15px #eee;
    transform: scale(1.04);
    transition: 0.4s;
  }
  .card-img {
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
  }
  .card-content {
    color: #f8f9fa;
    margin: 15px;
    .card-title {
      font-size: 20px;
    }
    .card-desc {
      margin-top: 10px;
    }
  }
  .card-foot {
    color: #f8f9fa;
    margin: 10px;
  }
}
</style>

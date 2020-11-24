<template>
  <div class="accordion-com">
    <ul>
      <li v-for="item in accordionlist" :key="item.img" :style="`background:url(${item.img})`">
        <div class="txt">
          <p>{{ item.txt }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const accordionlist = ref([
      { img: require('../assets/img/20170917.jpg'), txt: '我的个人拉萨之旅 | 故事之城' },
      { img: require('../assets/img/20170909.jpg'), txt: '我的个人拉萨之旅 | 故事之城' },
      { img: require('../assets/img/20170917.jpg'), txt: '我的个人拉萨之旅 | 故事之城' },
      { img: require('../assets/img/20170909.jpg'), txt: '我的个人拉萨之旅 | 故事之城' },
    ])

    return { accordionlist }
  },
})
</script>

<style lang="scss" scoped>
.accordion-com {
  width: 1090px;
  height: 429px;
  margin: 15px auto;
  // border: 1px solid #f00;
  overflow: hidden;
  ul {
    // width: 100%;
    display: flex;
    li {
      width: 100px;
      height: 430px;
      transition: 2s;
      &:hover {
        width: 1000%;
        transition: 3s;
      }
      &:last-child {
        width: 100%;
      }
      .txt {
        width: 100px;
        height: 430px;
        background: rgba(0, 0, 0, 0.7);
        overflow: hidden;
        cursor: pointer;
        p {
          padding: 0 42px;
          color: #fff;
          font-size: 14px;
        }
      }
    }
  }
}
</style>

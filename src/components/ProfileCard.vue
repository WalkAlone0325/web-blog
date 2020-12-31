<template>
  <div class="profile-card">
    <div class="top-section">
      <div class="pic">
        <img :src="settingVal.avator_img" alt="Error" />
      </div>
      <div class="name">{{ settingVal.avator }}</div>
      <div class="tag">{{ settingVal.desc }}</div>
    </div>
    <div class="bottom-section">
      <a
        target="_blank"
        :href="item.link"
        class="icon-item"
        v-for="item in iconList"
        :key="item._id"
      >
        <img :src="item.icon" alt="" />
        <!-- <span>{{ item.name }}</span> -->
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['settingVal', 'iconList'],
})
</script>

<style lang="scss" scoped>
.profile-card {
  width: 300px;
  // height: 430px;
  margin-top: 20px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 0 10px #00000070;

  .top-section {
    padding: 20px 20px;
    background: #74b9ffaa;

    .pic {
      position: relative;
      width: 100px;
      height: 100px;
      margin: auto auto 20px auto;
      padding: 4px;
      border: 2px solid #6a89cc;
      border-radius: 50%;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        border: 1px solid #3c6382;
        left: 0;
        top: 0;
        box-sizing: border-box;
        border-radius: 50%;
        animation: wava 1.5s infinite linear;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .name {
      color: #f1f1f1; /*字体颜色*/
      font-size: 26px; /*字体大小*/
      letter-spacing: 2px; /*字符间距*/
      text-transform: uppercase; /*字体大写*/
    }
    .tag {
      font-size: 16px;
      color: #222;
    }
  }

  .bottom-section {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    .icon-item {
      transition: all 0.6s;
      &:hover {
        transform: scale(1.4);
        transition: all 0.6s;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
@keyframes wava {
  to {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>

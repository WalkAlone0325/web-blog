<template>
  <div class="home-page">
    <div class="banner-container">
      <div class="banner-content">
        <h1 class="banner-name">Loner</h1>
        <span class="banner-desc">小小的前端开发者</span>
      </div>
    </div>
    <div class="content-box">
      <div class="content-desc">
        <h2>2020 年 重新起航</h2>
        <div>
          再见 2019，你好 2020。
        </div>
        <div>2020 一切归零，重新起航。</div>
        <div>即便是诸多不顺，但是我相信一切终将安好，归于平静。</div>
        <span class="content-btn">继续阅读→</span>
      </div>
      <div class="content-img">
        <img src="../assets/img/微信图片_20201028203827.jpg" alt="" />
      </div>
    </div>
    <ArticleCom />
    <div>123</div>
  </div>
</template>

<script>
import ArticleCom from '../components/ArticleCom'

export default {
  name: 'Home',
  components: { ArticleCom },
}
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
      .banner-name {
      }
      .banner-desc {
      }
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
    }
  }
}
</style>

<template>
  <div class="profile-card">
    <div class="top-section">
      <div class="pic">
        <img src="../assets/img/touxiang.png" alt="Error" />
      </div>
      <div class="name">独行</div>
      <div class="tag">@XXXX</div>
    </div>
    <div class="bottom-section">
      <h2>图标</h2>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.profile-card {
  width: 300px;
  height: 540px;
  margin-top: 20px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 0 10px #00000070;

  .top-section {
    padding: 60px 40px;
    background: #74b9ffaa;

    .pic {
      position: relative;
      width: 150px;
      height: 150px;
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
      font-size: 28px; /*字体大小*/
      letter-spacing: 2px; /*字符间距*/
      text-transform: uppercase; /*字体大写*/
    }
    .tag {
      font-size: 18px;
      color: #222;
    }
  }

  .bottom-section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f1f1f1;
    padding: 60px 20px;
    font-size: 28px;
    text-transform: uppercase;
  }
}
@keyframes wava {
  to {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>

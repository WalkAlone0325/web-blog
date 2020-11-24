<template>
  <div class="card-box">
    <div class="box">
      <div class="front-face">
        <div class="icon"><i class="iconfont">&#xe605;</i></div>
        <span>Web Design</span>
      </div>
      <div class="back-face">
        <span>Web Design</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae
          veritatis aliquid porro perspiciatis dolores impedit ad.
        </p>
      </div>
    </div>
    <div class="box">
      <div class="front-face">
        <div class="icon"><i class="iconfont">&#xe606;</i></div>
        <span>Advertising</span>
      </div>
      <div class="back-face">
        <span>Advertising</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae
          veritatis aliquid porro perspiciatis dolores impedit ad.
        </p>
      </div>
    </div>
    <div class="box">
      <div class="front-face">
        <div class="icon"><i class="iconfont">&#xe607;</i></div>
        <span>Game Design</span>
      </div>
      <div class="back-face">
        <span>Game Design</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae
          veritatis aliquid porro perspiciatis dolores impedit ad.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card-box {
  display: grid;
  margin: 50px 90px auto;
  grid-gap: 20px;
  // cursor: pointer;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
@media (max-width: 700px) {
  .card-box {
    margin: 200px auto;
  }
}
.card-box .box {
  width: 350px;
  margin: 0 auto;
  position: relative;
  perspective: 1000px;
}
.card-box .box .front-face {
  background: #fff;
  height: 220px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 20px 0px rgba(0, 81, 250, 0.1);
  transition: all 0.8s ease;
}
.box .front-face .icon {
  height: 80px;
}
.box .front-face .icon i {
  font-size: 65px;
}
.box .front-face span,
.box .back-face span {
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
}
.box .front-face .icon i,
.box .front-face span {
  background: linear-gradient(-135deg, #c850c0, #4158d0);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.box .back-face {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 220px;
  width: 100%;
  padding: 30px;
  color: #fff;
  opacity: 0;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  background: linear-gradient(-135deg, #c850c0, #4158d0);
  transform: translateY(110px) rotateX(-90deg);
  box-shadow: 0px 5px 20px 0px rgba(0, 81, 250, 0.1);
  transition: all 0.8s ease;
}
.box .back-face p {
  margin-top: 10px;
  text-align: justify;
}
.box:hover .back-face {
  opacity: 1;
  transform: rotateX(0deg);
}
.box:hover .front-face {
  opacity: 0;
  transform: translateY(-110px) rotateX(90deg);
}
</style>

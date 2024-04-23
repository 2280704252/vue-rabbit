<script setup>



</script>



<template>
  <div class="home-banner">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in 2" :key="item">
        <img src="https://img.mp.itc.cn/upload/20170220/5bf560c50d704e13a231dd2506686415_th.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 20;
  top: 100;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
<script setup>


import {getBannerAPI} from '@/apis/getBanner'
import { onMounted,ref } from 'vue'

const bannerList =ref([])


const getBanner = async()=>{

    const res = await getBannerAPI()
    console.log(res)

    bannerList.value=res.result

}

onMounted(()=>{

    getBanner()
})




</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1000px;
  height: 500px;
  position: relative;
  left: 20%;
  top: -500px;
  z-index: 98;

  img {
    width: 99%;
    height: 500px;
  }
}
</style>
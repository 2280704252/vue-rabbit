<script setup>


import HomeBannerVue from "@/views/Layout/Home/HomeBanner.vue";
import HomeCategoryVue from "@/views/Layout/Home/HomeCategory.vue";
import HomeHotVue from "@/views/Layout/Home/HomeHot.vue";
import HomeNewVue from "@/views/Layout/Home/HomeNew.vue";
import HomeProductVue from "@/views/Layout/Home/HomeProduct.vue";


</script>



<template>

    <div style="height:500px ">
        <HomeCategoryVue />
        <HomeBannerVue />

    </div>
    <HomeProductVue/>
    <HomeNewVue />
    <HomeHotVue />
    


</template>
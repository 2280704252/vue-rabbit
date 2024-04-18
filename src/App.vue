
<script setup>

import LayoutHeaderVue from "./views/Layout/components/LayoutHeader.vue";
import LayoutNav from "./views/Layout/components/LayoutNav.vue";
import LayoutFotter from '@/views/Layout/components/LayoutFooter.vue'

</script>


<template>

<!--一级出口路由-->
<!--路由出口，路由匹配到的组件将在这里渲染-->
 
 <RouterView/>


</template>


<style scoped lang="scss">
.test{

color:$sucColor ;

}



</style>

<script setup>

import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue';


import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";

</script>

<template>

<div style="height:700px">
  <LayoutFixed/>

  
  <LayoutNav/>
  
  <LayoutHeader />
  

  <RouterView />
  <LayoutFooter />
</div>
  
</template>

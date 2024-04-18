import { createRouter, createWebHistory } from 'vue-router'


import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'

import Footer from '@/views/Layout/components/LayoutFooter.vue'

import LayoutNav from '@/views/Layout/components/LayoutNav.vue'

import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'

import Home from '@/views/Layout/Home/home.vue'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      component: Layout,
      children:[
        {
          path:'',
          component:Home
        },
        

      ]

      // children:[
      //   {
      //     path: '',
      //     component: Footer


      //   },
      //   {
      //     path: '',
      //     component: LayoutHeader

      //   }
    

      // ]
    
      
    },
    {
      path: '/login',
      component:Login
      
    }
  ]
})


export default router



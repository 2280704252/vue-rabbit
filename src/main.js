import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from '@/router/index.js'


import App from './App.vue'

//初始化引入样式文件

import '@/styles/common.scss'


//测试接口函数

import { getCategory } from '@/apis/testAPI'

getCategory().then(res => {
    console.log(res)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

 
app.mount('#app')

import { createRouter, createWebHashHistory } from 'vue-router'

import index from './module/index'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...index]
})

export default router

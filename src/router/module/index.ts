

import { RouteRecordRaw } from 'vue-router'

import Layout from '../../layout/index.vue'


const routes: object[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/fail',
        name: 'Fail',
        component: () => import('@/views/fail/Fail.vue')
    },
    {
        path: '/data',
        component: Layout,
        redirect: '/data',
        alwaysShow: false,
        children: [{
            path: '/data',
            name: 'Data',
            component: () => import('@/views/data/Data.vue'),
            meta: {
                title: '数据统计',
            }
        }]
    },
]

export default routes
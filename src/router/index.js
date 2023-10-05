// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/s',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/s',
        name: 'Simplified Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/SimplifiedHome.vue'),
      },
    ],
  },
  {
    path:'/registered',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/registered',
        name: 'Registered Guests',
        component: () => import(/* webpackChunkName: "home" */ '@/views/RegisteredGuests.vue'),
      }
    ]

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

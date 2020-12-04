import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

  const routes = [
    {
      path:'/',
      name:'index',
      component:() => import('../views/index.vue')
    },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/leftBody',
    name: 'leftBody',
    component: () => import(/* webpackChunkName: "about" */ '../views/common/leftBody.vue')
  },
  {
    path: '/business',
    name: 'business',
    component: () => import(/* webpackChunkName: "about" */ '../views/business/business.vue')
  },
  {
    path:'/index',
    name:'index',
    component:() => import('../views/index.vue')
  },
  {
    path:'/project',
    name:'project',
    component:() => import('../views/project/project.vue')
  },
  {
    path:'/projectInfo',
    name:'projectInfo',
    component:() => import('../views/project/projectInfo/projectInfo.vue')
  },
  {
    path:'/customer',
    name:'customer',
    component:() => import('../views/customer/customerUs.vue')
  },
  {
    path:'/contanst',
    name:'contanst',
    component:() => import('../views/contanst/contanst.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

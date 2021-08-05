import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'base-layout' */ '@/layouts/Base.vue'),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: 'products' */ '@/views/Products.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Fix navigation failure, see more: https://github.com/vuejs/vue-router/issues/2881
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(error => {
    if (VueRouter.isNavigationFailure(error)) {
      // resolve error
      return error;
    }
    // rethrow error
    return Promise.reject(error);
  });
};

export default router;

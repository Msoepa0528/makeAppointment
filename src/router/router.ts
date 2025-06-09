import { KeepAlive } from 'vue';

export default [
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/IndexView.vue'),
      meta: {
        keepAlive:true
      }

    },
    {
      path: '/mobileIndex',
      name: 'mobileIndex',
      component: () => import('../views/mobile/IndexView.vue'),
      meta: {
        keepAlive:true
      }

    },

    {
      path: '/user',
      name: 'User',
      component: () => import('../views/UserView.vue'),
    },
    {
      path: '/mobileUser',
      name: 'mobileUser',
      component: () => import('../views/mobile/UserView.vue'),
      meta: {
        keepAlive:true
      }

    },
    {
      path: '/poinSuccess',
      name: 'PoinSuccess',
      component: () => import('../views/PoinSuccessView.vue'),
    },
    {
      path: '/mobilePoinSuccess',
      name: 'mobilePoinSuccess',
      component: () => import('../views/mobile/PoinSuccessView.vue'),
    },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/RegisterView.vue'),
      },
      {
        path: '/mobileRegister',
        name: 'mobileRegister',
        component: () => import('../views/mobile/RegisterView.vue'),
      }
]
    
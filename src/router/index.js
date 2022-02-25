import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
// import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Profile from '../views/Profile.vue';
import NotFoundComponent from '../views/NotFoundComponent.vue';
import UserSettings from '../views/settings/UserSettings.vue';
import UserSettingsProfile from '../views/settings/UserSettingsProfile.vue';
import UserSettingsPassword from '../views/settings/UserSettingsPassword.vue';
import Login from '../views/auth/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/profiles/:id',
    name: 'Profiles',
    component: Profile,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFoundComponent,
  },
  {
    path: '/settings',
    component: UserSettings,
    children: [
      {
        path: 'profile',
        component: UserSettingsProfile,
      },
      {
        path: 'password',
        component: UserSettingsPassword,
      },
    ],
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const isUserAuthenticated = () => {
  console.log('is user authenticated call');
};

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !isUserAuthenticated()) {
    // ...
    next({ name: 'Login' });
  } else {
    // ...
    next();
  }
});

export default router;

// export default () =>
//   createRouter({
//     history: createWebHistory(),
//     routes: [
//       {
//         path: '/',
//         name: 'Home',
//         component: Home,
//       },
//       {
//         path: '/about',
//         name: 'About',
//         component: () => import('./views/About.vue'),
//       },
//       {
//         path: '/contact',
//         name: 'Contact',
//         component: () => import('./views/Contact.vue'),
//       },
//     ],
//   });

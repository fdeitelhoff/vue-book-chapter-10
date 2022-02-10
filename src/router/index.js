import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
// import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Profile from '../components/Profile.vue';
import NotFoundComponent from '../components/NotFoundComponent.vue';
import UserSettings from '../components/settings/UserSettings.vue';
import UserSettingsProfile from '../components/settings/UserSettingsProfile.vue';
import UserSettingsPassword from '../components/settings/UserSettingsPassword.vue';
import Login from '../components/auth/Login.vue';

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

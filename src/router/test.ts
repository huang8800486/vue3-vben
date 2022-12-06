export default [
  {
    path: '/tests',
    name: 'tests',
    redirect: '/tests/index',
    component: () => import('@/views/tests/index.vue'),
    children: [
      {
        path: '/tests/locale',
        name: 'testsLocale',
        component: () => import('@/views/tests/locale.vue'),
      },
    ],
  },
];

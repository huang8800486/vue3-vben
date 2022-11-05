import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from './main';
import Home from '@/views/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Home,
    redirect: '/index',
    children: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // scrollBehavior: () => ({ left: 0, top: 0 }),
  scrollBehavior(to, from, savedPosition) {
    // keep-alive 返回缓存页面后记录浏览位置
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition;
    }
    // 异步滚动操作
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 0);
    });
  },
});

/**
 * 全局后置钩子
 * @param {Object} to: Route: 即将要进入的目标 路由对象
 * @param {Object} from: Route: 当前导航正要离开的路由
 * @param {Function} next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 */
// router.afterEach((): void => {
// 	// 路由切换时跳回滚动到顶部
// 	setTimeout(() => {
// 		window.scrollTo(0, 0);
// 	}, 0);
// });

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

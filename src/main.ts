import { createApp } from 'vue';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import { setupRouter } from '/@/router';
import { setupStore } from '/@/store';
import { setupI18n } from '/@/locales/setupI18n';
import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);

  // 注册路由
  setupRouter(app);
  // 配置 store
  setupStore(app);
  // 国际化
  await setupI18n(app);

  app.mount('#app');
}

bootstrap();

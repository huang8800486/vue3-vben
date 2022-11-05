import { createApp } from 'vue';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import { setupRouter } from '/@/router';
import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);

  // 注册路由
  setupRouter(app);

  app.mount('#app');
}

bootstrap();

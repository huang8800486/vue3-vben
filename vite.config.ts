import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    minify: 'terser', // vite2.6.x需要配置 “build.minify” 为 “terser”
    target: 'es2015', // 浏览器兼容
    outDir: './dist', // 指定输出路径
    emptyOutDir: true, // 不在项目根目录中, 清空目录
    assetsDir: 'static', // 合并所有文件只在static
    cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
    sourcemap: false, //是否构建source map 文件
    chunkSizeWarningLimit: 2000, // chunk 大小警告的限制
    terserOptions: {
      // 删除console, debugger
      compress: {
        // eslint-disable-next-line camelcase
        drop_console: true,
        // eslint-disable-next-line camelcase
        drop_debugger: true,
      },
    },
  },
});

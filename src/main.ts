import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import 'virtual:svg-icons-register'
import router from './router'; // 引入路由
// 引入全局主题颜色
import './assets/styles/theme.css';
import './assets/styles/dark.css';
// 持久化pinia
import piniaPersist from 'pinia-plugin-persistedstate'
import lazyLoad from './directives/lazyLoad';
// 引入Ant Design Vue的中文语言包
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ConfigProvider } from 'ant-design-vue';
// svg插件配置代码
// import 'virtual:svg-icons-register'

const pinia = createPinia()
pinia.use(piniaPersist) // 启用持久化功能


const app = createApp(App);
app.use(router);
app.use(pinia);
app.directive('lazy', lazyLoad);
app.use(Antd);
app.use(ElementPlus);
// 全局配置中文
app.config.globalProperties.$locale = zhCN;
app.mount('#app');

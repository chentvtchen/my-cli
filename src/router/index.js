import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 批量引入路由
const req = require.context('../views', true, /\.vue$/, 'lazy');
const routes = [{
  path: '/',
  name: 'home',
  component: () => import('../views/Home.vue')
}];
req.keys().forEach((filename) => {
  const newPath = filename.substring(2, filename.length - 4);
  const newName = newPath.replace(/\//g, '_');
  const file = req(filename);
  console.log(file.name);
  routes.push({
    path: `/${newPath}`,
    name: newName,
    // meta: {
    //   title: req(filename).data.name
    // },
    component: () => req(filename)
  });
});

const router = new VueRouter({
  routes
});

export default router;

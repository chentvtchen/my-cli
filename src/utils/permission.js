import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ViewUI from 'view-design';
import router from '@/router';
import store from '@/store';
import {
  getToken
} from './auth';

// 不重定向白名单
const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/'
      });
      NProgress.done();
    } else {
      // 实时拉取用户信息
      store
        .dispatch('GetUserInfo')
        .then((res) => {
          console.log(res);
          next();
        })
        .catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            ViewUI.Message.error({
              content: `拉取用户信息失败，请重新登录！${err}`
            });
            next({
              path: '/'
            });
          });
        });
    }
  } else {
    // 如果是包含在白名单里面的
    // eslint-disable-next-line no-lonely-if
    if (whiteList.includes(to.path)) {
      next();
    } else {
      // 需要重新登录
      next('/login');
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

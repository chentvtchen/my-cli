// 常用方法，install到vue实例上面
// 引入api
import api from '@/api/user';

const common = {
  install: (Vue, options) => {
    console.log(options);
    const $prototype = Vue.prototype;
    $prototype.$api = api;
    // 深度拷贝
    $prototype.$deepClone = () => {
      console.log('深度拷贝');
    };
    // 所有的枚举
    $prototype.$enum = {
      styleStatus: ['停用', '启用'],
      barType: ['样式类别', 'url类别']
    };
  }
};

export default common;

<template>
  <div id="app" class="content" :class="rowClass">
    <request-loading></request-loading>
    <!-- 两列布局 -->
    <!-- <div class="nav">
      1
    </div>
    <div class="body">
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import RequestLoading from '@/components/RequestLoading.vue';

export default {
  components: {
    RequestLoading
  },
  data() {
    return {
      // 两列布局的class
      rowClass: 'fixed-width-3'
    };
  },
  mounted() {
    const routeList = this.$router.options.routes;
    console.log(routeList);
  }
};
</script>


<style lang="scss">
@import 'assets/css/common.scss';
$navWidth: 100px;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav,.body {
  height: 100%;
  background-color: #aaa;
}
.body {
  background-color: #ccc;
}
.content {
  height: 100%;
  /************左列定宽，右边自适应 start************/
  // 使用float实现
  &.fixed-width-1 {
    .nav {
      float: left;
      width: $navWidth;
    }
    .body {
      // float: left;
      margin-left: $navWidth;
    }
  }
  // 使用float+overflow实现
  &.fixed-width-2 {
    // 优点：代码简单，容易理解，无需关注定宽的宽度，利用bfc达到自适应效果
    // 缺点：浮动脱离文档流，需要手动清除浮动，否则会产生高度塌陷；不支持ie6
    .nav {
      float: left;
      width: $navWidth;
    }
    .body {
      // float: left;
      // margin-left: $navWidth;
      overflow: hidden;  /*触发bfc达到自适应*/
    }
  }
  // 使用table实现
  &.fixed-width-3 {
    width: 100%;
    display: table;
    // 优点：代码简单，容易理解，无需关注定宽的宽度，利用单元格自动分配达到自适应效果
    // 缺点：margin失效；设置间隔比较麻烦；不支持ie8-
    .nav {
      width: $navWidth;
      display: table-cell;
    }
    .body {
      display: table-cell;
    }
  }
  /************左列定宽，右边自适应 end************/
  /************一列不定，一列自适应 start************/
  // 左边自适应，右边定宽
  .flexRow {
    .nav {
      width: 50px;
    }
  }
  /************一列不定，一列自适应 end************/
}


</style>

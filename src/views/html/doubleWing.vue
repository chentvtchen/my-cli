<template>
  <div class="doubleWing">
      <div class="header">#header</div>
      <div class="container">
        <!-- content内容需要优先被渲染出来 -->
        <div class="center">
          <div class="content">#center</div>
        </div>
        <div class="left">#left</div>
        <div class="right">#right</div>
      </div>
      <div class="footer">#footer</div>
  </div>
</template>

<script>
export default {
  name: 'doubleWing',
  components: {

  },
  computed: {

  },
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style lang="scss">
// 双飞翼布局
.doubleWing {
  height: 100%;
  text-align: center;
  .header, .footer {
    height: 60px;
    line-height: 60px;
    background-color: #aaa;
  }
  .center {
    // float: left;
    float: left;
    width: 100%;
    height: 500px;
    background-color: #ccc;
    .content {
      margin: 0 200px 0 100px;  /*关键!!!左右边界等于左右盒子的宽度,多出来的为盒子间隔*/
    }
  }
  .left {
    width: 100px;
    margin-left: -100%;
    float: left;
    height: 500px;
    background-color: lightblue;
  }
  .right {
    float: left;
    width: 200px;
    margin-left: -200px;
    height: 500px;
    background-color: lightsalmon;
  }
  .footer {
    clear: both;
  }
}
</style>

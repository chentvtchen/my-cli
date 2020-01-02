<template>
  <div class="bfc">
    <div class='box BFC'>
      <div class='left'> </div>
      <div class='right BFC'>
        <div class='little'></div>
        <div class='little'></div>
        <div class='little'></div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
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
.bfc {
  .BFC {
    overflow: hidden;
  }
     * {
        margin: 0;
        padding: 0;
    }
    .left{
        background: #73DE80;    /* 绿色 */
        opacity: 0.5;
        border: 3px solid #F31264;
        width: 200px;
        height: 200px;
        float: left;
    }
    .right{                        /* 粉色 */
        background: #EF5BE2;
        opacity: 0.5;
        border: 3px solid #F31264;
        width:400px;
        min-height: 100px;
    }
    .box{
        background:#888;
        height: 100%;
        margin-left: 50px;
    }
    .little{
        background: #fff;
        width: 50px;
        height: 50px;
        margin: 10px;
        float: left;
    }
}
</style>

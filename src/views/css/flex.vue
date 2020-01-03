<template>
  <div class="flexPage">
    <h2 class="heading">flex布局</h2>
    <h4 class="heading">骰子</h4>
    <div class="sieves-wrap">
      <div class="sieves one">
        <div class="dot"></div>
      </div>
      <div class="sieves two">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="sieves two col">
        <div class="dot"></div>
        <div class="dot"></div>
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
.flexPage {
  .sieves-wrap {
    padding: 20px;
    background-color: #252525;
    display: flex;
  }
  // 骰子
  .sieves {
    display: flex;
    background-color: #E7E7E7;
    width: 100px;
    height: 100px;
    padding: 5px;
    margin-left: 30px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow:inset 0px 0px 4px 2px #D7D7D7;
    &:first-child {
      margin-left: 0;
    }
    .dot {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #000;
    }
    &.one {
      justify-content: center;
      .dot {
        align-self: center;
        // align-self: flex-end;
      }
    }
    &.two {
      justify-content: space-between;
    }
    &.two.col {
      justify-content: space-between;
      flex-direction: column;
    }
  }
}
</style>

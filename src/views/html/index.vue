<template>
  <div class="">
    <h2 class="heading">盒模型（5 minutes）</h2>
    <h4 class="heading">标准盒模型（w3c标准）</h4>
    <p>内容</p>
    <h4 class="heading">怪异盒模型（IE浏览器）</h4>
    <h2 class="heading">垂直居中的方式，优缺点（5 minutes）</h2>
    <p>height:50px; line-height: 50px; text-align: center;</p>
    <p>position:absolute;  margin: 50vh 0;或者top: 50%;  transform: translate(-50%, -50%); </p>
    <p>position:absolute; top: 0; left:0; right: 0; bottom: 0;</p>
    <p>display:flex;  just-content:center; align-item:center; </p>
    <p>display:table-cell; vertical-align: middle;</p>
  </div>
</template>

<script>
export default {
  name: 'html_index',
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss'>
</style>

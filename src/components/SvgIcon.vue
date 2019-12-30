<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>>
    </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  components: {},
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      const name = ` ${this.className}` || '';
      return `svg-icon${name}`;
    }
  },
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style lang='scss' scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

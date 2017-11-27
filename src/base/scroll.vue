<template>
  <div class="item-class">
    class
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    listenScroll: {
      type: Boolean
    }
  }
})
export default class Scroll extends Vue {
  probeType: Number;
  data: object
  msg: string = 'Hello!'
  helloMsg: string = 'hello' + this.probeType;
  mounted () {
  }
  get computedMsg () {
    return 'computed' + this.msg;
  }
  greet () {
    this.msg += 'world';
    console.log(this.computedMsg);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>

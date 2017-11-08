<template>
  <div class="login">

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HelloWorld extends Vue {
  msg: string = 'Hello!'
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

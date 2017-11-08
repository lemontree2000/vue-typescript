<template>
  <div id="app">
    <router-view/>
    <nav>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {
}
</script>

<style lang="less" scoped>
  #app {
    nav {
      height: 97px;
    }
  }
</style>

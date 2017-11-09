<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
    <nav>
      <ul>
        <router-link tag="li" to="/index">
          <i class="iconfont icon-home"></i>
          <span class="text">首页</span>
        </router-link>
        <router-link tag="li" to="/topic">
          <i class="iconfont icon-weishibie"></i>
          <span class="text">识物</span>
        </router-link>
        <router-link tag="li" to="/class">
          <i class="iconfont icon-fenlei"></i>
          <span class="text">分类</span>
        </router-link>
        <router-link tag="li" to="/cart">
          <i class="iconfont icon-gouwuche"></i>
          <span class="text">购物车</span>
        </router-link>
        <router-link tag="li" to="/me">
          <i class="iconfont icon-gerenzhongxin"></i>
          <span class="text">个人</span>
        </router-link>
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
    .content {
      padding-bottom: 97px;
    }
    nav {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 97px;
      border-top: 1px solid #d9d9d9;
      background: #fff;
      ul {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-around;
        height: 97px;
        li {
          text-align: center;
          flex: 1;
          font-size: 24px;
          color: #7f7f7f;
          .text {
            display: block;
            margin-top: 10px;
          }
          .iconfont {
            font-size: 34px;
          }
        }
      }
    }
    .router-link-active {
      color: #b5262d;
    }
  }
</style>

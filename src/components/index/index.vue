<template>
  <div class="index">
    <div class="search-bar">
      <h1 class="logo"></h1>
      <div class="search-box">
        <i class="iconfont icon-search1"></i>
        <span class="text">搜索商品，共10501款好物</span>
      </div>
    </div>
    <div class="nav-bar">
      <ul>
        <li v-for="(item,index) in navData" :key="item" v-text="item" :class="{'active': index == 0}">{{item}}</li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Index extends Vue {
  msg: string = 'Hello!'
  navData: object = ['推荐', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣']
  mounted () {
  }

  get computedMsg () {
    return 'computed' + this.msg;
  }
  greet () {
    this.msg += 'world';
    console.log(this.computedMsg);
  }
  created () {
    console.log(this.navData);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .index {
    .search-bar {
      display: flex;
      align-items: center;
      h1 {
        width: 138px;
        height: 40px;
        background: url(../../common/image/logo.png) no-repeat 0 0;
        background-size: cover;
        margin-right: 20px;
      }
      .search-box {
        flex: 1;
        display: flex;
        height: 56px;
        font-size: 26px;
        align-items: center;
        justify-content: center;        
        background: #ededed;
        border-radius: 7px;
        color: #666;
        .iconfont {
          vertical-align: middle;
          margin-right: 10px;
        }
      }
      padding: 16px 30px;
      display: flex;
    }
    .nav-bar {
      overflow: auto;
      ul {
        white-space: nowrap;
        padding: 0 30px;
        height: 60px;     
        font-size: 0;     
        li {
          width: 88px;
          margin-right: 48px;
          font-size: 28px;
          text-align: center;
          display: inline-block;
          line-height: 56px;
          &.active {
            border-bottom: 4px solid #b52b30;
            color: #b52b30;
          }
        }
      }
    }
  }
</style>

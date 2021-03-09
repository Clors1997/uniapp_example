<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <u-divider>{{title}}</u-divider>
  </view>
</template>

<script>
  import {
    r_example
  } from "@/api/app_api/example.js"
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {
      this.getExample()
    },
    methods: {
      // api的使用 https://getman.cn/mock/clors/example
      async getExample() {
        let res = await r_example()
        console.log(res.data)
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>

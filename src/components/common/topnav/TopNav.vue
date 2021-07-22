<template>
  <div class="topnav">
    <div class="left" @click="goback"><slot name="left"><img src="~assets/images/jiantou.png" alt=""></slot></div>
    <div class="center"><slot name="center">图书商城</slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  name: "TopNav",
  setup() {
    const router = useRouter()
    const goback = () => {
      router.go(-1)
    }
    return {
      goback
    }
  }
}
</script>

<style scoped>
  .topnav {
    height: 45px;
    background: var(--color-high-back);
    line-height: 45px;
    text-align: center;
    color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    display: flex;
  }
  .left img {
    width: 30px;
    margin-top: 7px;
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>
<template>
  <div class="nav">
    <div>2222222222222222222222</div>
    <div class="nav-item">
      <router-link to="/">
        <div class="icon"><i class="iconfont icon-biaoqiankuozhan_shouye-326"></i></div>
        <div>首页</div>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/category">
        <div class="icon"><i class="iconfont icon-fenlei"></i></div>
        <div>分类</div>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/cart">
        <div class="icon"><i class="iconfont icon-gouwuche"></i></div>
        <div>购物车</div>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/profile">
        <div class="icon"><i class="iconfont icon-geren"></i></div>
        <div>个人</div>
      </router-link>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/iconfont.css";


.nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  background: #e3e3e3;
  display: flex;
  z-index: 9;
}
  .nav a {
    color: var(--color-text);
  }
  .nav .router-link-exact-active {
    color: #42b983;
  }
  .nav-item {
    flex: 1;
    text-align: center;
    font-size: var(--font-size);

  }
  .nav-item .icon {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
    display: inline-block;
  }

</style>

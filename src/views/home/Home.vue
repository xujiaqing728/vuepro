<template>
  <div class="home">
    <top-nav>
      <template v-slot:center>图书兄弟</template>
    </top-nav>
    <banner></banner>
    <recommend :recommends="recommends"></recommend>
    <tab-control @itemClick="itemClick" :tctitles="['畅销','新书','精选']"></tab-control>
    <goods-list></goods-list>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
    {{temid}}<br>
  </div>
</template>

<script>
import {ref, onMounted, reactive} from 'vue'
import { getHomeAllData } from "network/home";
import TopNav from 'components/common/topnav/TopNav'
import Banner from "views/home/childcomps/Banner";
import Recommend from "views/home/childcomps/Recommend";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

export default {
  name: 'Home',
  setup() {
    //
    let temid = ref(0)
    const banners = ref([])
    const recommends = ref([])

    onMounted(() => {
      {
        getHomeAllData().then(res => {
          banners.value = res.slides;
          recommends.value = res.goods.data;
          console.log(recommends);
        }).catch(err => {

        })
      }
    })
    const itemClick = (index) => {
      temid.value = index
    }
    return {
      banners,
      recommends,
      temid,
      itemClick

    }
  },
  components: {
    TopNav,
    Banner,
    Recommend,
    TabControl,
    GoodsList

  }
}
</script>
<style scoped>
  .jiantou{
    width: 30px;
    margin-top: 7px;
  }
</style>
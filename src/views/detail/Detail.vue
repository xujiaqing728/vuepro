<template>
  <div>
  <top-nav>
    <template v-slot:center>商品详情:{{id}}</template>
  </top-nav>
  </div>
</template>

<script>
import TopNav from 'components/common/topnav/TopNav'
import {useRoute} from 'vue-router'
import {ref} from 'vue'
export default {
  name: "Detail",
  components: {
    TopNav
  },
  setup() {
    const route = useRoute();
    let id = ref(0);
    id.value = route.query.id
    return {
      id
    }
  }
}
</script>

<style scoped>

</style>
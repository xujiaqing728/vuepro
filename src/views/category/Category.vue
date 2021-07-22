<template>
  <div>
    <top-nav>
      <template v-slot:center>商品分类</template>
    </top-nav>
  </div>
</template>

<script>
import TopNav from 'components/common/topnav/TopNav'

export default {
  name: "Category",
  components: {
    TopNav
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <top-nav>
      <template v-slot:center>购物车</template>
    </top-nav>
  </div>
</template>

<script>
import TopNav from 'components/common/topnav/TopNav'

export default {
  name: "Cart",
  components: {
    TopNav
  }
}
</script>

<style scoped>

</style>
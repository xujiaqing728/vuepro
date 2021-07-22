<template>
  <div>
    <top-nav>
      <template v-slot:center>个人中心</template>
    </top-nav>
  </div>
</template>

<script>
import TopNav from 'components/common/topnav/TopNav'

export default {
  name: "Profile",
  components: {
    TopNav
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends.slice(0,4)" :key="item.id">
      <a href="" @click.prevent="goD(item.id)">
        <img :src="item.cover_url" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {
    const router = useRouter();
    const goD = (id) => {
      router.push({path:'/detail', query: {id: id}})
    }
    return {
      goD
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    padding: 30px 0;
    border-bottom: 8px solid #e3e3e3;
  }
  .recommend-item {
    flex: 1;
    font-size: var(--font-size);
  }
  .recommend-item img {
    width: 80px;
  }
</style>
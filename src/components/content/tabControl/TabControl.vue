<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item,index) in tctitles"
         @click="itemClick(index)"
         :class="{active:index == currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "TabControl",
  props: {
    tctitles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(props, {emit}) {
    let currentIndex = ref(0);

    const itemClick = (index) => {
      currentIndex.value = index
      emit('itemClick', index)
    }
    return {
      currentIndex,
      itemClick
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    height: 40px;
    font-size: var(--font-size);
    position: sticky;
    top: 44px;
    background-color: var(--color-background);
  }
  .tab-control-item {
    flex: 1;
    text-align: center;
    line-height: 40px;
  }
  .tab-control-item span{
    padding: 0 10px;
    line-height: 36px;
    display: inline-block;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 4px solid var(--color-high-text);
  }
</style>
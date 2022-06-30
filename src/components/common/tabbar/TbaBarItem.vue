<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TbaBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
       return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
}
</script>

<style scoped>
 #tab-bar-item {
   flex: 1;
   text-align: center;
   font-size: 14px;
   height: 49px;
 }
 #tab-bar-item img {
   vertical-align: middle;
   margin-top: 3px;
   height: 24px;
   width: 24px;
 }
</style>

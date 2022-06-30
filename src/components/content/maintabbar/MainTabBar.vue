<template>
  <tar-bar>
    <tba-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/home.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="../../../assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template v-slot:item-text>首页</template>
    </tba-bar-item>
    <tba-bar-item path="/category" activeColor="blue">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/category.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="../../../assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template v-slot:item-text>分类</template>
    </tba-bar-item>
    <tba-bar-item path="/cart" activeColor="blue">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/shopcart.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template v-slot:item-text>购物车</template>
    </tba-bar-item>
    <tba-bar-item path="/profile" activeColor="blue">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/profile.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="../../../assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:item-text>我的</template>
    </tba-bar-item>
  </tar-bar>
</template>

<script>
import TarBar from '../../common/tabbar/TarBar'
import TbaBarItem from '../../common/tabbar/TbaBarItem'
export default {
  name: "MainTabBar",
  components: {
    TbaBarItem,
    TarBar
  }
}
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
}
</style>

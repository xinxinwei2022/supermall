<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>蘑菇街</template>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "../../views/home/childcomps/HomeSwiper";
import RecommendView from "../../views/home/childcomps/RecommendView";

import {getHomeMultidata} from "../../network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #f6f6f6;
}
</style>

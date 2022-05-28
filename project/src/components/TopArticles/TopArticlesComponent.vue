<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3 px-1" v-for="article in topArticlesData" :key="article.id">
      <TopArticle :article="article"></TopArticle>
    </div>
  </div>
</template>

<script lang="ts">
import {topArticlesData} from "@/data/topArticles";
import TopArticle from "@/components/TopArticles/components/TopArticle.vue";
import {defineComponent} from "vue";

export default defineComponent({

  name: "TopArticles",
  components:{
    TopArticle
  },
  setup() {
    return {topArticlesData}
  }
});
</script>

<style lang="scss" scoped>

</style>
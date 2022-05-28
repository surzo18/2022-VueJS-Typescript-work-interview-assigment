<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <ArticleComponent :article="article" v-for="article in col1" :key="article.id"></ArticleComponent>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <ArticleComponent :article="article" v-for="article in col2" :key="article.id"></ArticleComponent>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <ArticleComponent :article="article" v-for="article in col3" :key="article.id"></ArticleComponent>
    </div>
  </div>
</template>

<script lang="ts">


import {articles} from "@/data/articles";
import {defineComponent, onMounted, ref} from "vue";
import {Article} from "@/Interfaces";
import ArticleComponent from "@/components/ArticlesGrid/components/ArticleComponent.vue";

export default defineComponent({
  name: "ArticlesGrid",
  components: {
    ArticleComponent
  },
  setup() {
    const col1 = ref<Article[]>([])
    const col2 = ref<Article[]>([])
    const col3 = ref<Article[]>([])

    onMounted(() => {
      col1.value = articles.slice(0, 4);
      col2.value = articles.slice(4, 8);
      col3.value = articles.slice(8, 12);
    })
    return {col1, col2, col3}
  }
});
</script>

<style lang="scss" scoped>

</style>
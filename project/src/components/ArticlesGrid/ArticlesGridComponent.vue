<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4 px-1 d-flex flex-column justify-content-between">
      <ArticleComponent :article="article" v-for="article in col1" :key="article.id"></ArticleComponent>
    </div>
    <div class="col-12 col-md-6 col-lg-4 px-1  d-flex flex-column justify-content-between">
      <ArticleComponent :article="article" v-for="article in col2" :key="article.id"></ArticleComponent>
    </div>
    <div class="col-12 col-lg-4 px-1  d-flex flex-column justify-content-between">
        <ArticleComponent :article="article" v-for="article in col3" :key="article.id"></ArticleComponent>
    </div>
  </div>
  <div class="d-flex">
    <button class="btn btn-outline-dark mx-auto" @click="loadMoore"> Load moore articles</button>
  </div>
</template>

<script lang="ts">


import {articles} from "@/data/articles";
import {defineComponent, onMounted, ref} from "vue";
import {Article} from "@/Interfaces";
import ArticleComponent from "@/components/ArticlesGrid/components/ArticleComponent.vue";
import { notify } from "@kyvg/vue3-notification";

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

    const loadMoore = () => {
      notify({ type: 'error', text: 'The operation is not implemented yet!' });
    }
    return {col1, col2, col3, loadMoore}
  }
});
</script>

<style lang="scss" scoped>

</style>
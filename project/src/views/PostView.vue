<template>
  <div class="title-holder d-flex align-items-center justify-content-start mb-5">
    <h1 class="text-black text-capitalize">{{ article.title }}</h1>
  </div>
  <div class="container">
    <div class="mx-auto cst-holder">
      <div class="row mb-4">
        <img class="article-image" :src="article.coverImage" :alt="article.title">
      </div>
      <div class="text-start" v-html="article.text">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, ref} from 'vue';
import {Article} from "@/Interfaces";
import {articles} from "@/data/articles";
import {useRoute} from "vue-router";

export default defineComponent({
  name: 'BlogView',
  setup() {
    const route = useRoute();
    const article = ref<Article>();

    onBeforeMount(() => {
      const id = Number.parseInt(route.params.id[0]);
      article.value = articles.filter((data) => {
        return data.id === id;
      })[0];
    });

    return {article};
  }
});
</script>

<style scoped lang="scss">
.title-holder {
  min-height: 160px;
  background-color: #f6caae;

  h1 {
    font-size: 1.8em;
    font-weight: bold;
    padding-left:20%;
    padding-right:20%;
    text-align: left;
  }
}

.article-image {
  max-height: 600px;
}

.cst-holder{
  max-width:1000px;
  overflow: hidden;
}
</style>

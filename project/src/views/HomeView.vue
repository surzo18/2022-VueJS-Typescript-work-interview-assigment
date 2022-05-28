<template>
  <TopArticles/>
  <div class="container">
    <ArticlesGrid/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TopArticles from '@/components/TopArticles/TopArticlesComponent.vue';
import ArticlesGrid from '@/components/ArticlesGrid/ArticlesGridComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {TopArticles, ArticlesGrid},

});
</script>

<template>
  <div class="container">
    <ArticlesGrid/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ArticlesGrid from '@/components/ArticlesGrid/ArticlesGridComponent.vue';

export default defineComponent({
  name: 'BlogView',
  components: {ArticlesGrid},
});
</script>

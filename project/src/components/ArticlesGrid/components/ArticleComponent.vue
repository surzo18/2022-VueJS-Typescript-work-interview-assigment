<template>
  <div class="card">
    <div class="card-body">
      <img :src="article.coverImage" class="card-img-top" :alt="article.title">
      <div class="card-body">
              <span class="category text-secondary text-uppercase mb-1">{{
                  Category[article.category]
                }}</span>
        <h5 class="card-title">{{ article.title }}</h5>

        <div class="line"></div>
        <p class="card-text"> {{article.text}}</p>
        <a href="" class="btn btn-secondary">READ MORE</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Article, Category} from "@/Interfaces";
import {defineComponent} from "vue";

export default defineComponent({
  name: "ArticleComponent",
  props: {
    article: {
      type: Object as () => Article,
      required: true
    }
  },
  setup(props: { article: Article }) {

    return {...props, Category}
  }
});
</script>

<style scoped lang="scss">
.line{
  border-bottom:2px solid #bada55;
  max-width: 120px;
  margin:10px auto;
}
</style>
<template>
  <div class="card">
    <div class="card-body">
      <img :src="article.coverImage" class="card-img-top" :alt="article.title">
      <div class="card-body">
        <div class="mb-2">
          <span class="category text-secondary text-uppercase my-3">
                {{ Category[article.category] }}
          </span>
        </div>
        <h5 class="card-title">{{ article.title }}</h5>
        <div class="line"></div>
        <p class="card-text"> {{ article.text }}</p>
        <a href="" class="btn text-secondary read-moore">Read More</a>
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
.line {
  border-bottom: 3px solid #c9c9c9;
  max-width: 120px;
  margin: 25px auto;
}

.card {
  border: none;
}

.card-title{
  font-size: 2em;
  font-weight: bold;
  text-transform: capitalize;
}

.read-moore{
  font-weight: bold;
}
</style>
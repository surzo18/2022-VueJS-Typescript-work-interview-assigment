<template>
  <div class="card">
    <div class="card-body">
      <router-link class="img-link text-decoration-none" :to="'/Post/' + article.id">
        <img :src="article.coverImage" class="card-img-top" :alt="article.title">
      </router-link>
      <div class="card-body">
        <div class="mb-2">
          <span class="category text-secondary text-uppercase my-3">
                {{ Category[article.category] }}
          </span>
        </div>
        <router-link class="text-decoration-none" :to="'/Post/' + article.id">
          <h5 class="card-title text-black">{{ article.title }}</h5>
        </router-link>
        <div class="line"></div>
        <p class="card-text" v-html="article.text.substring(0,255)"> </p>
        <router-link class="btn text-secondary read-moore" :to="'/Post/' + article.id">Read More</router-link>
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

.read-moore:hover, .card-title:hover{
  color:#F65555!important;
}

.read-moore:hover, .card-title:hover{
  color:#F65555!important;
}

</style>
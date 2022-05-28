<template>
  <div class="card position-relative" v-bind:style="{ backgroundImage: 'url(' + article.coverImage + ')' }">
    <div class="cst-overlay"></div>
    <div class="card-body position-absolute">
      <span class="category text-secondary text-uppercase mb-1">{{
          Category[article.category]
        }}</span>
      <h5 class="card-title text-white">{{ article.title }}</h5>
        <a href="#" class="read-more-btn btn btn-outline-light mt-3">Read More</a>
    </div>
  </div>
</template>

<script lang="ts">

import {Article} from "@/Interfaces";
import {Category} from "@/Interfaces";

export default {
  name: "TopArticle",
  props: {
    article: {
      type: Object as () => Article,
      required: true
    }
  },
  setup(props: { article: Article }) {

    return {...props, Category}
  }
}
</script>

<style scoped>
.card{
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height:550px;
}

.card-body{
  bottom:40px;
  width:100%;
}

.cst-overlay{
  position: absolute;
  width:100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
}

.category{
  font-size: 0.8em;
  font-weight: 60
}

.read-more-btn{

}
</style>
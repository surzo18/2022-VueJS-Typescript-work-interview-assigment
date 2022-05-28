<template>
  <div class="card position-relative" v-bind:style="{ backgroundImage: 'url(' + article.coverImage + ')' }">
    <div class="cst-overlay"></div>
    <div class="card-body position-absolute">
      <span class="category text-uppercase">{{
          Category[article.category]
        }}</span>
      <router-link class="text-decoration-none" :to="'/Post/' + article.id">
        <h5 class="card-title text-white mt-3">{{ article.title }}</h5>
      </router-link>
      <router-link class="read-more-btn btn btn-outline-light mt-3 px-3" :to="'/Post/' + article.id">Read More</router-link>
    </div>
  </div>
</template>

<script lang="ts">

import {Article} from "@/Interfaces";
import {Category} from "@/Interfaces";
import {defineComponent} from "vue";

export default defineComponent({
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
})
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
  font-weight: 60;
  color: white;
}

.card-title{
  text-transform: capitalize;
  font-size: 2.2em;
  max-height: 85px;
  overflow: hidden;
}

.read-more-btn{
  border-radius: 1px;
}

</style>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/Home">
        <img src='@/assets/logo.png' class="logo" alt="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="main-ul" class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item active d-flex align-items-center" v-for="(link,key) in navigation" :key="key">
            <router-link :to='"/" + link' class="text-decoration-none" >{{
                link
              }}
            </router-link>
            <i v-if="route.name === link"
               class="bi bi-caret-down-fill ms-2"></i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">

import {defineComponent, onMounted, onUpdated, ref} from "vue";
import {Ref} from "vue";
import {useRoute} from "vue-router";

export default defineComponent({
  name: "NavigationComponent",
  setup() {
    const navigation: Ref<string[]> = ref(['Home', 'About', 'Blog', 'Contact'])
    const route = useRoute();

    return {navigation, route};
  }
});
</script>

<style lang="scss" scoped>
.logo {
  width: 100px;
  height: auto;
}

.navbar-brand {
  margin-left: 3%;
}

#main-ul {
  margin-right: 23%;

  .nav-item {
    margin-right: 15%;

    a {
      color: #2c3e50;
    }
  }
}

.bi-caret-down-fill {
  font-size: 0.7em;
}
</style>
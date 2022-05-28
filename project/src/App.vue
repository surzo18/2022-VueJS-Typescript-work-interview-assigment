<template>
  <notifications  position="bottom center"/>
  <NavigationComponent/>
  <router-view/>
  <footer class="mt-5">
    <p>There is nothing moore yet...</p>
  </footer>
</template>

<script lang="ts">
import NavigationComponent from "@/components/Navigation/NavigationComponent.vue"
import {defineComponent} from "vue";

export default defineComponent({
  name: "App",
  components:{
    NavigationComponent
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Sanskrit&display=swap');

#app {
  font-family: 'Tiro Devanagari Sanskrit', serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  footer{
    background-color: #2c3e50;
    height:200px;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

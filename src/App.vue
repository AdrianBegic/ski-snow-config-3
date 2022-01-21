<template>
  <div>
  <Background/>
  <MainCard/>
    <nav
      class="navbar  justify-content-between flex-wrap flex-row"
      style="position: fixed;  width:100%; top: 0; background-color: #000; color: #fff;"
    >
      <div class="container">
        <a class="navbar-brand float-left">SKI SNOWBOARD CONFIGURATOR</a>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">HOME</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>


<script>
import MainCard from '@/components/MainCard.vue'
import Background from "@/components/Background.vue";
export default {
  name: "Home",
  components: {
    Background,
    MainCard,
  },
};
</script>


<style scoped>

.container {
  width: 100%;
  margin: 0;
  max-width: 100vw;
}
.nav-link {
  color: inherit;
  font-size: 2em;
  margin-right: 50px;
}




</style>

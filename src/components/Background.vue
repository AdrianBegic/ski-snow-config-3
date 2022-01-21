<template>
  <div id="Background"></div>
</template>

<script>
export default {
  name: "Background",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Background {
    width: 100%;
    height: 100vh;
    background-image: url("./WhitefishMountainResort-3.png") ;
    background-size:cover;
    position: absolute;
    z-index: -999;
}

</style>



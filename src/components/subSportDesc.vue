<template>
<div>
    <div class="card">
    <button id="back" @click="$router.go(-1)"></button>
    </div>
</div>
</template>

<script>
export default {
  name: "subSportDesc",
  props: {
    msg: String,
  },
}
</script>

<style scoped>
    .card {
    width: 60%;
    height: 60vh;
    border-radius: 40px;
    margin: 0 auto;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
   
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}
#back {
   float: left;
  display: inline-block;
  background-color: #000;
  border: none;
  margin: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
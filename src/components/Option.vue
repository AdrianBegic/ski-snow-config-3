<template>
  <div>
    <div class="card">
      <h1>{{ mainSport.MainTitle }}</h1>
      <h1>{{ mainSport.MainTitle }}</h1>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  name: "Option",
  props: {
    msg: String,
  },
  components: {},

  data() {
    return {
      mainSport: {},
     
    };
  },

   

  created() {
    db.collection("mainSport").where("ID", "==", this.$route.params.id)
    .onSnapshot((snapshotChange) => {
      this.mainSport = [];
      snapshotChange.forEach((doc) => {
        this.mainSport.push({
          key: doc.id,
          MainTitle: doc.data().MainTitle,
          SubSport: doc.data().SubSport,
          SubTitle: doc.data().SubSport.downhill.SubTitle,
          Image: doc.data().Image,
          ID: doc.data().ID,
        });
      });
    });
    
  },
};
</script>

<style scoped>
* {
  color: #000;
}

.card {
  width: 60%;
  height: 60vh;
  border-radius: 40px;
  margin: 0 auto;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
}

.subCard {
  display: inline-Block;
  background-color: #000;
  height: 50%;
  width: 30%;
}
</style>

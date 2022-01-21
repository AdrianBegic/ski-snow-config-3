<template>
<div>
  <Background/>
  <article v-if="visible != true" class="card">
    <h1 class="card-title">SKI</h1>
    <div class="option-container">
      <div id="freestyle" class="optionOne" @click="selector($event)">
        <h1 class="sub-title">{{mainSport.Title}}</h1>
   
      </div>
      <div id="downhill" class="optionTwo" @click="selector($event)">
        <h1 class="sub-title">DOWNHILL</h1>
       
      </div>
      <div id="mountain" class="optionThree" @click="selector($event)">
        <h1 class="sub-title">MOUNTAIN</h1>
 
      </div>
    </div>
    <button class="back" @click="$router.push('/')"></button>
  </article>
  <Option v-if="visible" />
  </div>
</template>

<script>
import Option from "@/components/Option.vue";
import { db } from "../firebaseDb";
import Background from "@/components/Background.vue";

export default {
  name: "Ski",
  props: {
    msg: String,
  },
  components: {
    Background,
    Option,
  },

  data() {
    return {
      mainSport: {},
    };
  },
  created() {
    db.collection("mainSport")
      .where("ID", "==", this.$route.params.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.mainSport = {
            key: doc.id,
            Price: doc.data().Price,
            Title: doc.data().Title,
            Image: doc.data().Image,
            ID: doc.data().ID,
          };
        });
      });
  },
};
</script>
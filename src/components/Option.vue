<template>
<div>
    <div class="card">
    <button id="back" @click="$router.go(-1)"></button>
        <div class="subCard" v-for="subSport in subSport" :key="subSport.key">
            <router-link :to="{ name: 'subSportOption', params: { id: subSport.Route } }" style="text-decoration: none; color: inherit">
                <h3 style="text-align: center;">{{ subSport.subTitle }}</h3>
                <img :src="subSport.subImage" alt="image" class="image" />
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import {
    db
} from "../firebaseDb";

export default {
    name: "Option",
    props: {
        msg: String,
    },
    components: {},

    data() {
        return {
            subSport: {},
        };
    },

    created() {
        db.collection("subSport")
            .where("ID", "==", this.$route.params.id)
            .onSnapshot((snapshotChange) => {
                this.subSport = [];
                snapshotChange.forEach((doc) => {
                    this.subSport.push({
                        key: doc.id,
                        subImage: doc.data().subImage,
                        subTitle: doc.data().subTitle,
                        Image: doc.data().Image,
                        Route: doc.data().route,
                        ID: doc.data().ID,
                    });
                });
            });
    },
};
</script>

<style scoped>

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

.card {
    width: 60%;
    height: 60vh;
    border-radius: 40px;
    margin: 0 auto;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}

.subCard {
    display: inline-flex;
    background-color: #000;
    text-align: center;
    font-size: 1em;
    color: #fff;
    width: 30%;
    height: 90%;
    border-radius: 40px;
    margin: auto;
    cursor: pointer;
}

.image {
    padding-top: 20px;
    width: 100%;
    height: 80%;
}
</style>

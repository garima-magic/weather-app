<template>
  <div id="main" :class= 'day' >
    <div class="container my-5">
      <h1 class="title text-center">{{ weather.title }}</h1>
      <div class="card rounded my-3 shadow-lg night overflow-hidden">
        <!-- Top of card starts here -->
        <div class="card-top text-center" style="margin-bottom: 15rem">
          <div class="city-name my-3">
            <p>{{ weather.location.city }}</p>
            <span>...</span>
            <p class="">{{ weather.location.country }}</p>
          </div>
        </div>
        <!-- top of card ends here -->

        <!--card middle body, card body used cos I want to just update the innerHTML -->
        <div class="card-body">
          <!-- card middle starts here -->
          <div class="card-mid">
            <div class="row">
              <div class="col-12 text-center temp">
                <span>{{ weather.item.condition.temp }}&deg;C</span>
                <p class="my-4">{{ weather.item.condition.date }}</p>
                
              </div>
            </div>
            <div class="row" v-for="temp in forecast" v-bind:key="temp.code">
              <div
                class="col d-flex justify-content-between px-5 mx-5"
                v-if="temp.code == 23"
              >
                <p>
                  <img src="../assets/down.svg" alt="" />
                  {{ temp.low }}&deg;C
                </p>
                <p>
                  <img src="../assets/up.svg" alt="" />
                  {{ temp.high }}&deg;C
                </p>
              </div>
            </div>
          </div>
          <!-- card middle ends here -->

          <!-- card bottom starts here -->
          <div class="card-bottom px-5 py-4 row">
            <div class="col text-center">
              <p>{{ weather.wind.chill }}&deg;C</p>
              <span>Feels like</span>
            </div>
            <div class="col text-center">
              <p>{{ weather.atmosphere.humidity }}%</p>
              <span>humidity</span>
            </div>
          </div>
          <div class="col text-center">
            <p  class ="button" v-on:click="showData">
               <span v-if ="showMore"><img src="../assets/up.svg" alt="" /> </span>
               <span v-else><img src="../assets/down.svg" alt="" /></span>
               Show More Data 
            </p>
          </div>

          <div class="card-bottom px-5 py-4 row" v-if="showMore">
            <div class="col text-center">
              <h2>{{ weather.wind.speed }} mph</h2>
              <span>Wind Speed</span>
            </div>
            <div class="col text-center">
              <h2>{{ weather.atmosphere.humidity }}%</h2>
              <span>humidity</span>
            </div>
            <div class="col text-center">
              <h2>{{ weather.atmosphere.pressure }} in</h2>
              <span>Pressure</span>
            </div>
            <div class="col text-center">
              <h2>{{ weather.astronomy.sunrise }}</h2>
              <span>SunRise</span>
            </div>
            <div class="col text-center">
              <h2>{{ weather.astronomy.sunset }}</h2>
              <span>Sunset</span>
            </div>
          </div>

          <!-- card bottom ends here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "Home",
  data() {
    return {
      showMore: false,
      weather: store.query.results.channel,
      forecast: store.query.results.channel.item.forecast,
    };
  },
  methods:{
      showData() {
        this.showMore = !this.showMore;
      },
  },
};
</script>

<style scoped>
@import "../assets/animation.css";
@import "../assets/custom.css";
</style>

<template>
  <section aria-label="Weekly forecast" class="pt-0">
    <div class="card" :class="isVisible ? 'visible' : 'hidden'">
      <ul class="forecast">
        <li v-for="day in forecast" :key="day.dt">
          <h3>
            {{
              new Date(day.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'short'
              })
            }}
          </h3>
          <p>{{ new Date(day.dt * 1000).toLocaleDateString() }}</p>
          <p class="temp">
            {{ Math.round(day.temp.day) + String.fromCharCode(176) }}
          </p>
          <img :src="day.weather[0].icon" :alt="day.weather[0].description" />
          <p>{{ Math.round(day.pop * 100) }}%</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {}
  },
  data() {
    return {
      forecast: null,
      isVisible: false,
      icon: ''
    };
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(weather) {
        if (weather.forecast != undefined) {
          const weatherArray = weather.forecast.slice(1);
          this.forecast = weatherArray;
          this.isVisible = true;

          for (var i = 0; i < weather.forecast.length; i++) {
            if (
              weather.forecast[i].weather[0].icon == '01d' ||
              weather.forecast[i].weather[0].icon == '01n'
            ) {
              weather.forecast[
                i
              ].weather[0].icon = require('../assets/icons/icn-sunny.svg');
            }
            if (
              weather.forecast[i].weather[0].icon == '02d' ||
              weather.forecast[i].weather[0].icon == '02n' ||
              weather.forecast[i].weather[0].icon == '04d' ||
              weather.forecast[i].weather[0].icon == '04n' ||
              weather.forecast[i].weather[0].icon == '03d' ||
              weather.forecast[i].weather[0].icon == '03n'
            ) {
              weather.forecast[
                i
              ].weather[0].icon = require('../assets/icons/icn-partly-cloudy.svg');
            }

            if (
              weather.forecast[i].weather[0].icon == '09d' ||
              weather.forecast[i].weather[0].icon == '09n'
            ) {
              weather.forecast[
                i
              ].weather[0].icon = require('../assets/icons/icn-shower.svg');
            }
            if (
              weather.forecast[i].weather[0].icon == '10d' ||
              weather.forecast[i].weather[0].icon == '10n'
            ) {
              weather.forecast[
                i
              ].weather[0].icon = require('../assets/icons/icn-rain.svg');
            }
            if (
              weather.forecast[i].weather[0].icon == '11d' ||
              weather.forecast[i].weather[0].icon == '11n'
            ) {
              weather.forecast[
                i
              ].weather[0].icon = require('../assets/icons/icn-storms.svg');
            }
            if (
              weather.forecast[i].weather[0].icon == '13d' ||
              weather.forecast[i].weather[0].icon == '13n'
            ) {
              weather.forecast[
                i
              ].weather[0].icon = require('../assets/icons/icn-snow.svg');
            }
            if (
              weather.forecast[i].weather[0].icon == '50d' ||
              weather.forecast[i].weather[0].icon == '50n'
            ) {
              weather.forecast[
                i
              ].weather[0].icon = require('../assets/icons/icn-hazy.svg');
            }
          }
        }
      }
    }
  },
  methods: {
    swapIcon(icn) {
      if (icn == '01d' || icn == '01n') {
        this.icon = require('../assets/icons/icn-sunny.svg');
      }
      if (
        icn == '02d' ||
        icn == '02n' ||
        icn == '04d' ||
        icn == '04n' ||
        icn == '03d' ||
        icn == '03n'
      ) {
        this.icon = require('../assets/icons/icn-partly-cloudy.svg');
      }

      if (icn == '09d' || icn == '09n') {
        this.icon = require('../assets/icons/icn-shower.svg');
      }
      if (icn == '10d' || icn == '10n') {
        this.icon = require('../assets/icons/icn-rain.svg');
      }
      if (icn == '11d' || icn == '11n') {
        this.icon = require('../assets/icons/icn-storms.svg');
      }
      if (icn == '13d' || icn == '13n') {
        this.icon = require('../assets/icons/icn-snow.svg');
      }
      if (icn == '50d' || icn == '50n') {
        this.icon = require('../assets/icons/icn-hazy.svg');
      }
    }
  }
};
</script>

<style lang="scss">
@import '../assets/styles/styles.scss';
.forecast {
  padding: 0;

  list-style: none;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-around;

    flex-wrap: wrap;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem 0;

    border-bottom: solid 1px $ltgrey;

    @media (min-width: 1000px) {
      padding-right: 1rem;
      padding-bottom: 0;

      border-right: solid 1px $ltgrey;
      border-bottom: 0;
    }

    &:last-of-type {
      padding-bottom: 0;
      padding-right: 0;

      border-right: 0;
      border-bottom: 0;
    }

    h3 {
      margin: 0;
    }

    p {
      margin: 0 0 0.5rem 0;
    }

    img {
      width: 3rem;
    }

    .temp {
      font-size: 2.5rem;
      font-weight: 700;
    }
  }
}

.pt-0 {
  padding-top: 0 !important;
}
</style>

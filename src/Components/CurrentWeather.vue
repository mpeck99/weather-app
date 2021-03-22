<template>
  <section aria-label="Weather data" class="current">
    <div class="card" :class="isVisible ? 'visible' : 'hidden'">
      <div class="card-header">
        <h2>{{ this.location }}</h2>
        <p>{{ this.day }} {{ this.date }}</p>
        <p>{{ this.time }}</p>
      </div>
      <div class="card-body">
        <img :src="this.icon" :alt="this.description" />
        <p class="temp">{{ this.temp }}</p>
        <p class="temp temp--feels">{{ this.feelsLike }}</p>
        <p class="description">{{ this.description }}</p>
      </div>
      <div class="card-footer">
        <span>
          <img :src="this.sunriseIcon" />
          <p>{{ this.sunrise }}</p>
        </span>
        <span>
          <img :src="this.sunsetIcon" />
          <p>{{ this.sunset }}</p>
        </span>
      </div>
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
      day: '',
      date: '',
      location: '',
      currentWeather: this.data.current,
      temp: '',
      icon: '',
      description: '',
      time: '',
      feelsLike: '',
      sunrise: '',
      sunset: '',
      sunriseIcon: '',
      sunsetIcon: '',
      isVisible: false
    };
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(weather) {
        if (weather.current != undefined) {
          this.temp =
            Math.round(weather.current.temp) + String.fromCharCode(176);
          this.day = new Date().toLocaleDateString('en-us', {
            weekday: 'long'
          });
          this.location = weather.location;
          this.date = new Date().toLocaleDateString();

          this.description = weather.current.weather[0].description;

          this.time = 'As of ' + this.formatTime(weather.current.dt);
          this.sunrise = this.formatTime(weather.current.sunrise);
          this.sunset = this.formatTime(weather.current.sunset);
          this.feelsLike =
            'Feels like ' +
            Math.round(weather.current.feels_like) +
            String.fromCharCode(176);
          this.sunriseIcon = require('../assets/icons/icn-sunrise.svg');
          this.sunsetIcon = require('../assets/icons/icn-sunset.svg');
          this.isVisible = true;
          this.swapIcon(weather.current.weather[0].icon);
        }
      }
    }
  },
  methods: {
    formatTime(time) {
      const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      const newTime = new Date(time * 1000)
        .toLocaleTimeString(timeOptions)
        .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3')
        .replace('AM', 'am')
        .replace('PM', 'pm');

      return newTime;
    },
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

.current {
  // width: 100%;

  margin: 0 auto;

  @media (min-width: 767px) {
    width: 35%;
  }
}

.card {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 5rem 1fr auto;

  padding: 1rem;

  position: relative;

  $border: 5px;

  background: #fff;
  background-clip: padding-box;
  border: solid $border transparent;
  border-radius: 1em;

  &.visible {
    display: block;
  }

  &.hidden {
    display: none;
  }

  &:before {
    content: '';
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: -1;
    margin: -$border;
    border-radius: inherit;
    background: linear-gradient(to right, $pink, $teal, $purple);
  }

  .card-header {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    h2 {
      text-transform: capitalize;
      margin: 0;
    }

    p {
      margin: 0;

      font-size: 0.9rem;
    }
  }

  .card-body {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;

    align-items: center;
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    .temp {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      font-weight: 700;
      font-size: 4.5rem;

      &.temp--feels {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        justify-self: flex-end;

        font-size: 0.9rem;
        font-weight: 400;
      }
    }

    .description {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .temp--feels {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      justify-self: flex-end;
    }

    img {
      width: 5rem;
      height: auto;

      grid-column: 2 / 3;
      grid-row: 1 / 2;
      justify-self: flex-end;
    }

    p {
      margin: 0;

      font-size: 0.9rem;

      text-transform: capitalize;
    }
  }
  .card-footer {
    display: flex;

    grid-column: 1 / 4;
    grid-row: 3 / 4;

    span {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;

      img {
        width: 1.5rem;
        height: auto;
      }

      p {
        margin: 0;
      }

      &:nth-of-type(1) {
        margin-right: 2rem;
      }
    }
  }
}
</style>

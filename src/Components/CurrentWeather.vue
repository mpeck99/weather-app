<template>
  <section aria-label="Weather data" class="current">
    <h2>{{ this.location }}</h2>
    <div class="card" :class="isVisible ? 'visible' : 'hidden'">
      <div class="card-header">
        <h3>{{ this.day }}</h3>
        <p>{{ this.date }}</p>
        <p>{{ this.time }}</p>
      </div>
      <div class="card-body">
        <img :src="this.icon" :alt="this.description" />
        <p class="temp">{{ this.temp }}</p>
        <p class="temp temp--feels">{{ this.feelsLike }}</p>
        <p class="description">{{ this.description }}</p>
      </div>
      <div class="card-footer">
        <ul>
          <li>
            <img :src="this.sunriseIcon" />
            <span>{{ this.sunrise }}</span>
          </li>
          <li>
            <img :src="this.sunsetIcon" />
            <span>{{ this.sunset }}</span>
          </li>
          <li>
            <img :src="this.humidityIcon" />
            <span>{{ this.humidity }}</span>
          </li>
          <li>
            <img :src="this.dewIcon" />
            <span>{{ this.dew }}</span>
          </li>
          <li>
            <img :src="this.windyIcon" />
            <span
              >{{ this.windSpeed }}
              <img
                :src="this.windDirectionIcon"
                :alt="this.windDirection"
                :style="styles"
              />
            </span>
          </li>
        </ul>

        <span> </span>
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
      isVisible: false,
      dewIcon: '',
      windyIcon: '',
      alertIcon: '',
      humidityIcon: '',
      humidity: '',
      dewPoint: '',
      windSpeed: '',
      windDirection: '',
      windDirectionIcon: '',
      alertName: '',
      alertDescrip: ''
    };
  },
  computed: {
    styles: function () {
      return {
        transform: 'rotate(' + (this.windDirection - 227) + 'deg)'
      };
    }
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

          this.humidity = weather.current.humidity + '%';
          this.dew =
            Math.round(weather.current.dew_point) + String.fromCharCode(176);
          this.windDirectionIcon = require('../assets/icons/icn-direction.svg');
          this.sunriseIcon = require('../assets/icons/icn-sunrise.svg');
          this.sunsetIcon = require('../assets/icons/icn-sunset.svg');
          this.humidityIcon = require('../assets/icons/icn-humidity.svg');
          this.windyIcon = require('../assets/icons/icn-windy.svg');
          this.dewIcon = require('../assets/icons/icn-dew.svg');
          this.alertIcon = require('../assets/icons/icn-alert.svg');
          this.isVisible = true;
          this.windSpeed = Math.round(weather.current.wind_speed) + ' mph';
          this.windDirection = weather.current.wind_deg;
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
      if (icn == '02d' || icn == '02n') {
        this.icon = require('../assets/icons/icn-partly-cloudy.svg');
      }
      if (icn == '04d' || icn == '04n' || icn == '03d' || icn == '03n') {
        this.icon = require('../assets/icons/icn-cloudy.svg');
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

    padding: 0 2rem;

    h3 {
      margin: 0;
    }

    p {
      margin: 0;

      font-size: 0.9rem;
    }
  }

  .card-body {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    align-items: center;
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    margin-bottom: 1rem;
    padding: 0 2rem;

    .temp {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      font-weight: 700;
      font-size: 4.5rem;

      &.temp--feels {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        justify-self: flex-start;

        font-size: 0.9rem;
        font-weight: 400;
      }
    }

    .description {
      grid-column: 2 / 3;
      grid-row: 2 / 3;

      justify-self: center;
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
    grid-column: 1 / 4;
    grid-row: 3 / 4;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;

      padding-left: 0;
      margin-top: 2rem;

      li {
        display: grid;
        grid-template-rows: 2rem 1fr;
        grid-template-columns: 6rem;
        justify-items: center;

        margin: 1rem auto;

        img {
          width: 2rem;
          height: auto;

          grid-row: 1 / 2;
          grid-column: 1 / 2;
        }

        span {
          grid-row: 2 / 3;
          grid-column: 1 / 2;

          margin: 1rem 0;

          img {
            width: 1rem;
          }
        }
      }

      @media (min-width: 500px) {
        flex-direction: row;
      }
    }
  }
}

h2 {
  margin-top: 0;

  text-transform: capitalize;
}
</style>

<template>
  <section aria-label="Search for your local weather" class="bg-gradient">
    <h1>Find your weather!</h1>
    <div class="form-wrapper">
      <div class="form-group">
        <label for="location">City</label>
        <input
          type="text"
          name="location"
          id="location"
          v-model="city"
          class="form-control"
        />
      </div>
      <state-dropdown @state="stateValue" />
      <button @click="fetchData()">Search</button>
    </div>
  </section>
</template>
<script>
import stateDropdown from '@/Components/StatesDropdown';

export default {
  components: {
    stateDropdown
  },
  data() {
    return {
      apiKey: '4de4a8d80078d333a4a72f1c11d87820',
      url: 'https://api.openweathermap.org/data/2.5/',
      currentWeather: [],
      weekForecast: [],
      coordinates: [],
      error: null,
      city: '',
      alerts: []
    };
  },
  methods: {
    stateValue(value) {
      this.selectedState = value;
    },
    fetchData() {
      this.getCoordinates(this.getWeather);
    },
    getCoordinates(callback) {
      this.error = null;

      // Getting the coordinates
      if (
        (!this.city == '' && !this.selectedState == '') ||
        !this.city == null
      ) {
        fetch(
          `${this.url}weather?q=${this.city.trim()},${
            this.selectedState
          },US&appid=${this.apiKey}&units=imperial`
        )
          .then((res) => {
            if (!res.ok) {
              this.error = res.status;
            } else {
              return res.json();
            }
          })
          .then((data) => {
            this.coordinates = data.coord;
            callback();
          });
      }
    },
    getWeather() {
      // Getting the weather
      if (
        (!this.city == '' && !this.selectedState == '') ||
        !this.city == null
      ) {
        fetch(
          `${this.url}onecall?lat=${this.coordinates.lat}&lon=${this.coordinates.lon}&appid=${this.apiKey}&exclude=hourly,minutely&units=imperial`
        )
          .then((data) => {
            if (!data.ok) {
              this.error = data.status;
            } else {
              return data.json();
            }
          })
          .then((data) => {
            this.weekForecast = data.daily;
            this.currentWeather = data.current;
            this.location = this.city + ', ' + this.selectedState;
            this.alerts = data.alerts;
            this.$emit('data', {
              current: this.currentWeather,
              location: this.location,
              forecast: this.weekForecast,
              alerts: this.alerts
            });
          });
      }
    }
  }
};
</script>

<style lang="scss">
@import '../assets/styles/styles.scss';
.bg-gradient {
  min-height: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  position: relative;

  background: linear-gradient(115deg, $pink 0%, $teal, $purple 100%);
  @media (min-width: 767px) {
    min-height: 18rem;

    padding-top: 4rem;
  }

  &:after {
    content: '';

    width: 100%;
    height: 8rem;

    position: absolute;
    left: 0;
    bottom: -2rem;

    z-index: 1;

    clip-path: polygon(
      100% 0%,
      0% 0%,
      0% 65%,
      1% 64.95%,
      2% 64.8%,
      3% 64.6%,
      4% 64.3%,
      5% 63.9%,
      6% 63.45%,
      7% 62.9%,
      8% 62.25%,
      9% 61.55%,
      10% 60.8%,
      11% 59.95%,
      12% 59.05%,
      13% 58.1%,
      14% 57.1%,
      15% 56.05%,
      16% 55%,
      17% 53.9%,
      18% 52.8%,
      19% 51.65%,
      20% 50.5%,
      21% 49.35%,
      22% 48.2%,
      23% 47.05%,
      24% 45.9%,
      25% 44.8%,
      26% 43.75%,
      27% 42.75%,
      28% 41.75%,
      29% 40.8%,
      30% 39.9%,
      31% 39.1%,
      32% 38.35%,
      33% 37.65%,
      34% 37.05%,
      35% 36.5%,
      36% 36.05%,
      37% 35.65%,
      38% 35.35%,
      39% 35.15%,
      40% 35.05%,
      41% 35%,
      42% 35.05%,
      43% 35.2%,
      44% 35.45%,
      45% 35.75%,
      46% 36.15%,
      47% 36.65%,
      48% 37.2%,
      49% 37.85%,
      50% 38.55%,
      51% 39.35%,
      52% 40.2%,
      53% 41.1%,
      54% 42.05%,
      55% 43.05%,
      56% 44.1%,
      57% 45.15%,
      58% 46.3%,
      59% 47.4%,
      60% 48.55%,
      61% 49.7%,
      62% 50.85%,
      63% 52%,
      64% 53.15%,
      65% 54.25%,
      66% 55.35%,
      67% 56.4%,
      68% 57.45%,
      69% 58.4%,
      70% 59.35%,
      71% 60.2%,
      72% 61.05%,
      73% 61.8%,
      74% 62.45%,
      75% 63.05%,
      76% 63.6%,
      77% 64.05%,
      78% 64.4%,
      79% 64.7%,
      80% 64.85%,
      81% 65%,
      82% 65%,
      83% 64.9%,
      84% 64.75%,
      85% 64.5%,
      86% 64.2%,
      87% 63.75%,
      88% 63.25%,
      89% 62.7%,
      90% 62.05%,
      91% 61.3%,
      92% 60.5%,
      93% 59.65%,
      94% 58.75%,
      95% 57.8%,
      96% 56.8%,
      97% 55.75%,
      98% 54.65%,
      99% 53.55%,
      100% 52.4%
    );

    background-color: $white;

    transform: rotate(180deg);
  }
}

h1 {
  margin: 0;

  color: $white;
}
.form-wrapper {
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 1rem;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: center;

    margin-top: 4rem;
  }
}
.form-group {
  display: flex;
  flex-direction: column;

  @media (min-width: 767px) {
    position: relative;
  }

  label {
    margin: 0.75rem 0;

    font-weight: 700;
    font-family: 'Oswald', sans-serif;
    color: $white;

    @media (min-width: 767px) {
      position: absolute;
      top: -1.75rem;

      margin: 0;
    }
  }

  input,
  select {
    height: 2.5rem;

    padding: 0.5rem;
    margin: 0;

    border-radius: 0.25rem;
    border-color: transparent;
    background-color: $white;
    box-sizing: border-box;

    @media (min-width: 767px) {
      border-radius: 0.25rem 0 0 0.25rem;
      border: 0;
    }
  }
  input {
    width: 100%;

    @media (min-width: 767px) {
      width: 25rem;

      border-right: 2px $teal solid;
    }
  }
  select {
    width: 100%;

    margin-bottom: 1rem;

    @media (min-width: 767px) {
      max-width: 8rem;

      margin-bottom: 0;

      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
button {
  padding: 0.5rem;

  font-weight: 700;
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  color: $white;

  background-color: $black;
  border-radius: 0.25rem;
  border: 0;

  @media (min-width: 767px) {
    padding: 0 1.75rem;

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:hover,
  &:focus {
    background-color: $coral;
    color: $black;

    cursor: pointer;
  }
}
</style>

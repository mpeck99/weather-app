<template>
  <main>
    <search @data="weather" />
    <div class="wrapper">
      <current :data="data" :key="data" />
      <forecast :data="data" :key="data" />
    </div>
  </main>
  <foot />
</template>

<script>
import Search from '@/Components/PlacesSearch';
import Current from '@/Components/CurrentWeather';
import Foot from '@/Components/Footer';
import Forecast from '@/Components/Forecast';

export default {
  name: 'App',

  components: {
    Search,
    Current,
    Forecast,
    Foot
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    return this.data;
  },
  methods: {
    weather(value) {
      this.data = value;
    }
  }
};
</script>

<style lang="scss">
@import './assets/styles/styles.scss';

.wrapper {
  max-width: 75%;

  margin: 0 auto;

  section {
    width: 100%;

    padding: 2rem 0;
  }
}
</style>

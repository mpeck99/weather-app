<template>
  <section aria-label="Weekly forecast">
    <div class="card" :class="isVisible ? 'visible' : 'hidden'">
      <ul class="forecast">
        <li v-for="day in forecast" :key="day.dt">
          <h2>
            {{
              new Date(day.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'short'
              })
            }}
          </h2>
          <p>{{ new Date(day.dt * 1000).toLocaleDateString() }}</p>
        </li>
      </ul>
    </div>

    {{ this.forecast }}
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
      isVisible: false
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
        }
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

  @media (min-width: 767px) {
    display: flex;
    justify-content: space-around;

    flex-wrap: wrap;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-right: 2rem;

    border-right: solid 1px $ltgrey;

    &:last-of-type {
      border-right: 0;

      padding: 0;
    }

    h2 {
      margin: 0;

      font-size: 1.5rem;
    }
    p {
      margin: 0;
    }
  }
}
</style>

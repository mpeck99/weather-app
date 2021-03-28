<template>
  <section aria-label="Weekly forecast">
    <div class="card" :class="isVisible ? 'visible' : 'hidden'">
      <ul class="forecast" v-for="day in forecast" :key="day.dt">
        <li>
          <h2>
            {{
              new Date(day.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'long'
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

<style lang=""></style>

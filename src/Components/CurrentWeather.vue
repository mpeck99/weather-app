<template>
  <h2>{{ this.data.location }}</h2>
  <div class="card">
    <p>{{ this.data.current }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
h2 {
  text-transform: capitalize;
}
</style>

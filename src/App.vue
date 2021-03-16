<template>
  <search />
</template>

<script>
import Search from '@/Components/PlacesSearch';

export default {
  name: 'App',

  components: {
    Search
  }
};
</script>

<style lang="scss">
.form-group {
  display: grid;
  grid-template-rows: 2rem 1fr;
  grid-template-columns: 100%;

  padding: 1rem;

  label {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  .form-control {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
}
</style>

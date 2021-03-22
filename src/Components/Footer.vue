<template>
  <footer>
    <p>Morgan Peck - Weather App @{{ new Date().getFullYear() }}</p>
    <p>Built with <a href="https://v3.vuejs.org/">Vue 3</a></p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../assets/styles/styles.scss';

footer {
  display: flex;
  justify-content: space-between;

  padding: 0.75rem 1rem;

  color: $white;

  background: $black;

  border-image-source: linear-gradient(to left, $pink, $teal, $purple);
  border-top: 10px solid;
  border-bottom: none;
  border-right: none;
  border-left: none;
  border-image-slice: 1;
  border-width: 0.5rem;

  a,
  a:visited {
    color: $white;
  }
}
</style>

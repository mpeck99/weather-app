<template>
  <div class="search-wrapper">
    <label for="location">Search for location</label>
    <input type="text" name="location" id="location" v-model="city">
    <state-dropdown />
    <button>Search</button>
  </div>
</template>

<script>
import stateDropdown from '@/Components/StatesDropdown'

export default {

  components : {
      stateDropdown
  }

}
</script>

<style>

</style>
<template>
  <div class="list-group">
    <div
      class="list-group-item list-group-item-action"
      v-for="el in countryStore.countries"
      @click="showCountry(el)"
    >
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/
${el.alpha2Code.toLowerCase()}.png`"
      />
      <p>{{ el.name.common }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCountryStore } from "../stores/country.js";

const countryStore = useCountryStore();

countryStore.getCountries();

function showCountry(el) {
  countryStore.selectedCountry.flag = el.alpha2Code.toLowerCase();
  countryStore.selectedCountry.name = el.name.common;
  countryStore.selectedCountry.capital = el.capital[0];
  countryStore.selectedCountry.area = el.area;
  countryStore.selectedCountry.borders = el.borders;
}
</script>

<style></style>

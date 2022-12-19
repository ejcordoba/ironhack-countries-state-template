<template>
  <img
    :src="`https://flagpedia.net/data/flags/icon/72x54/
${countryStore.selectedCountry.flag}.png`"
    alt="country flag"
  />
  <h1>{{ countryStore.selectedCountry.name }}</h1>
  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <td style="width: 30%">Capital</td>
        <td>{{ countryStore.selectedCountry.capital }}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{{ countryStore.selectedCountry.area }} km <sup>2</sup></td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
          <ul>
            <li v-for="border in countryStore.selectedCountry.borders">
              <a href="/">{{ border }}</a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCountryStore } from "../stores/country.js";

const countryStore = useCountryStore();
</script>

<style></style>

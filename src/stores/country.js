import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => ({
    countries: [],
    selectedCountry: {
      flag:'',
      name: '',
      capital: '',
      area: 0,
      borders: []
    }
  }),
  actions: {
    async getCountries() {
      const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
      const finalRes = await res.json();
      this.countries = finalRes;
    }
  }
});
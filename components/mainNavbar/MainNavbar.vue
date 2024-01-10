<template>
  <nav class="navbar navbar-dark bg-dark justify-content-center sticky-top">
    <div class="text-center">
      <nuxt-link v-for="page in pages" :key="page" :to='makeURL(page)' style="border: none;">
        <button class="btn btn-danger">{{ page.toUpperCase() }}</button>
      </nuxt-link>
      <select class="form-select" v-model="selectedYear" @change="setYearStorage(selectedYear)">
        <option v-for="year in years" :key="year"
         :value="year">{{ year }}</option>
      </select>
    </div>
  </nav>    
</template>

<script setup lang="ts">
const pages = ['home', 'teams', 'favourite']
const makeURL = (page: string) => (page === 'home' ? '/' : `/${page}`)
const startYear = 2000;
const endYear = 2023;
const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);

const selectedYear = ref<any>(2023);

const { data: season, setData: setSeason } = useLocalStorage("selectedYear");

onMounted(() => {
  let dataStorage;
  if(!localStorage.getItem("selectedYear")) {
    dataStorage = `${endYear}`
    setYearStorage(endYear)
  }
  else {
    dataStorage = localStorage.getItem("selectedYear")
  }

  selectedYear.value = dataStorage;
 })

const setYearStorage = (year: number) => {
  setSeason(year)
}
</script>

<style scoped>
.btn {
  margin: 10px 20px;
}
</style>
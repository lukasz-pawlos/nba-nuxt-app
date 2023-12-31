<template>
  <nav class="navbar navbar-dark bg-dark justify-content-center">
    <div class="text-center">
      <template v-for="page in pages" :key="page">
        <button class="btn btn-danger">{{ page.toUpperCase() }}</button>
      </template>
    </div>
  </nav>    
</template>

<script setup lang="ts">

const pages = ['home', 'teams', 'favourite']

</script>

<style scoped>
.btn {
  margin: 10px 20px;
}
</style>
<template>
  <div class="c-inputFind">
    <input type="text"
      class="c-inputFind__input form-control form-rounded"
      placeholder="Player ID"
      v-model="searchValue"
      @keyup.enter="doMore()"
      />
    <button class="c-inputFind__button btn btn-primary" @click="doMore()">
      <i class="bi bi-search"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchValue = ref<string>('') 

//Future router to player list page
const doMore = () => {console.log(searchValue.value)}
</script>

<style scoped>
.c-inputFind {
  position: relative;
}
.c-inputFind__input {
  padding: 0.75rem 3.75rem 0.75rem 0.75rem
}

.c-inputFind__button {
  position: absolute;
  right: 0.5rem;
  top: 0.375rem;
  border-radius: 100%;
}
</style>
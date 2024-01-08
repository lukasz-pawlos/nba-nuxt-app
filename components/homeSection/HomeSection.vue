<template>
  <div class="c-homeSection"> 
    <h1 class="c-homeSection__h1">Find you player</h1>
    <InputFind/>
  </div>
</template>

<script setup lang="ts">
import InputFind from '@components/inputs/InputFind.vue';
</script>

<style scope>
.c-homeSection {
  max-width: 850px;
  padding: 0 30px;
  text-align: center;
}

.c-homeSection__h1 {
  font-size: 90px;
  word-wrap:normal;
  padding-top: 200px;
  color: wheat;
}
</style>
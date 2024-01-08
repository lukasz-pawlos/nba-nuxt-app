<template>
  <button class="c-starButton">
    <i v-if="!props.active" class="bi bi-star"></i>
    <i v-else class="bi bi-star-fill"></i>
  </button>
</template>

<script setup lang="ts">
interface StarButtonProps {
  active: boolean
}
const props = defineProps<StarButtonProps>()
</script>

<style scope>
.c-starButton {
  font-size: 2rem;
  background: none;
  border-radius: 100%;
  padding: 0.25rem;
  width: 3.25rem;
  color: yellow;
  border: none;
}

.c-starButton:hover {
  border: 2px solid yellow;
}
</style>
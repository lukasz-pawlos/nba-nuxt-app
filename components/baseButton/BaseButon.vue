<template>
    <button class="c-baseButton">
        <slot/>
    </button>
</template>

<script setup lang="ts">
// interface baseButtonProps {

// }

// defineProps
</script>

<style scope>
.c-baseButton {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.75rem;
  background:#ff8800;
  margin-top: 1rem;
  box-shadow: 0rem 0.25rem 0rem #894900, 0rem 0rem 0.55rem black;
  transition: all 0.5s linear;
}

.c-baseButton:hover {
  box-shadow: none;
  box-shadow: 0rem 0.15rem 0rem #894900, 0rem 0rem 0.25rem black;

}

</style>
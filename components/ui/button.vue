<template>
  <button>{{ text }}</button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
});
</script>

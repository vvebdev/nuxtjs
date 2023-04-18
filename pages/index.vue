<template>
  <h1>index h1</h1>
  <h2>counter.count = {{ counter.count }}</h2>
  <NuxtLink to="/user/2"> to user </NuxtLink>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();
</script>

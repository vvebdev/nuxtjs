<template>
  <h1>user h1</h1>
  <h2>this is userId = {{ id }}</h2>
  <h2>this is counter.count = {{ counter.count }}</h2>
  <Button @click="counter.increment()" />
  <br />
  <br />
  <NuxtLink to="/"> to index </NuxtLink>
</template>

<script setup>
import Button from '@/components/ui/button.vue';
import { useCounterStore } from '@/stores/counter';

const route = useRoute();
const counter = useCounterStore();
const id = route.params.id;
</script>

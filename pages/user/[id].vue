<template>
  <h1>{{ $t('userPage.title') }}</h1>
  <h2>{{ $t('userPage.userId') }} = {{ id }}</h2>
  <h2>{{ $t('counter') }} = {{ counter.count }}</h2>
  <Button :text="$t('button')" @click="counter.increment()" />
  <br />
  <br />
  <NuxtLink to="/">{{ $t('userPage.toMain') }}</NuxtLink>
</template>

<script setup>
import Button from '@/components/ui/button.vue';
import { useCounterStore } from '@/stores/counter';

const route = useRoute();
const counter = useCounterStore();
const id = route.params.id;
</script>

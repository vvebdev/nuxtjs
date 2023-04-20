<template>
  <h1>{{ $t('mainPage.title') }}</h1>
  <h2>{{ $t('counter') }} = {{ counter.count }}</h2>
  <NuxtLink to="/user/2"> {{ $t('mainPage.toUser') }} </NuxtLink>
  <br /><br /><br /><br />
  <select v-model="$i18n.locale">
    <option
      v-for="locale in $i18n.availableLocales"
      :key="locale"
      :value="locale"
    >
      {{ locale }}
    </option>
  </select>
  <p>{{ $t('hello', { name: 'nickname' }) }}</p>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();
</script>

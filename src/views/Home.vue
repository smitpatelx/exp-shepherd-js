<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <app-tour />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import AppTour from '@/components/AppTour.vue'
export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
    AppTour
  },
});
</script>

<template>
  <div class="w-full grid grid-cols-3">
    <div class="col-span-1">
      <button 
        class="bg-blue-500 text-white py-2 px-4 rounded shadow"
        data-v-step="1"
      >
        Add +
      </button>
    </div>
    <div class="col-span-1">
      <button 
        class="bg-blue-500 text-white py-2 px-4 rounded shadow"
        data-v-step="2"
      >
        Del -
      </button>
    </div>
    <div class="col-span-1 relative">
      <button 
        class="bg-blue-500 text-white py-2 px-4 rounded shadow"
        data-v-step="3"
        @click="open=!open"
      >
        Edit
      </button>
      <!-- Dialog Start -->
      <div v-if="open" class="w-full max-w-sm bg-gray-100 py-4 px-6 space-y-3 flex flex-wrap items-center justify-center absolute top-full mt-2 left-0 shadow-lg">
        <input data-v-step="4" type="text" placeholder="First Name" class="w-full bg-gray-200 rounded py-2 px-4">
        <input data-v-step="5" type="text" placeholder="Last Name" class="w-full bg-gray-200 rounded py-2 px-4">
      </div>
      <!-- Dialog End -->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      open: false,
    }
  }
};
</script>
